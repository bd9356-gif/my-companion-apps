-- 002_connect_existing_tips_and_recipes.sql  (Website Publishing — rollout after proof of concept)
--
-- Run once in the Supabase SQL editor. Safe to re-run.
--
-- 1. Connects the six existing website tips to your saved Chef Jen tips (notes)
--    and gives each one its ORIGINAL address (/tips/best-wine-for-cooking etc.),
--    replacing any new address a tip picked up during testing. Marks them published.
-- 2. Publishes the other 11 collection recipes (Tacos already is).
--
-- Nothing visible breaks: the hand-typed pages still exist until the website
-- update goes out. Check the report at the bottom before applying that update.

begin;

-- ── 1. Tips ────────────────────────────────────────────────────────────
drop table if exists tip_map;
create temp table tip_map (ord int, slug text, pattern text, note_id uuid, candidates int);
insert into tip_map (ord, slug, pattern) values
  (1, 'best-wine-for-cooking',        'wine'),
  (2, 'cast-iron-vs-stainless-steel', 'cast.?iron'),
  (3, 'how-to-use-instant-pot',       'instant.?pot'),
  (4, 'how-to-rescue-dry-chicken',    'dry.*chicken|chicken.*dry'),
  (5, 'fix-over-salted-dish',         'salt'),
  (6, 'restaurant-level-sauces',      'sauce');

do $$
declare
  bill uuid := (select id from auth.users where lower(email) = 'bd9356@gmail.com');
  t record;
  pick uuid;
  n int;
begin
  for t in select * from tip_map order by ord loop
    -- Candidates: Bill's notes whose saved tip link points at this page,
    -- or whose title (or question) matches; not already used for another tip.
    select count(*) into n
    from notes x
    where x.user_id = bill
      and (x.tip_url ilike '%/tips/' || t.slug || '%'
           or x.title ~* t.pattern or coalesce(x.question, '') ~* t.pattern)
      and x.id not in (select note_id from tip_map where note_id is not null);

    -- Best candidate: exact tip link first, then the most recent match.
    select x.id into pick
    from notes x
    where x.user_id = bill
      and (x.tip_url ilike '%/tips/' || t.slug || '%'
           or x.title ~* t.pattern or coalesce(x.question, '') ~* t.pattern)
      and x.id not in (select note_id from tip_map where note_id is not null)
    order by (x.tip_url ilike '%/tips/' || t.slug || '%') desc nulls last, x.created_at desc
    limit 1;

    update tip_map set note_id = pick, candidates = n where ord = t.ord;

    if pick is not null then
      -- Free the original address if anything else holds it, then assign it.
      update notes set web_slug = null where web_slug = t.slug and id <> pick;
      update notes set web_slug = t.slug, published = true where id = pick;
    end if;
  end loop;
end $$;

-- ── 2. Recipes: publish the other 11 collection recipes ────────────────
update public.personal_recipes
set published = true
where web_slug in (
  'sheet-pan-chicken-veggies', 'spaghetti-stuffed-peppers', 'cheeseburger-casserole',
  'creamy-garlic-pasta', 'banana-split-smoothie',
  'florida-yellow-snapper', 'shrimp-scampi-classic', 'linguine-puttanesca-classic',
  'italian-sausage-gnocchi', 'italian-cream-cake', 'lemon-pecorino-chicken'
)
  and web_collection is not null
  and deleted_at is null
  and user_id = (select id from auth.users where lower(email) = 'bd9356@gmail.com');

commit;

-- ── 3. Report ──────────────────────────────────────────────────────────
-- Tips: every row should be OK. "candidates" > 1 means more than one saved
-- tip matched — check the title is the right one.
select 'tip' as kind, m.slug,
       case when m.note_id is null then 'NO MATCH — tell Claude' else 'OK' end as status,
       n.title, m.candidates, n.published
from tip_map m
left join notes n on n.id = m.note_id
union all
-- Recipes: all 12 collection recipes should show published = true.
select 'recipe', p.web_slug,
       case when p.published then 'OK' else 'NOT PUBLISHED' end,
       p.title, null, p.published
from personal_recipes p
where p.web_collection is not null
  and p.user_id = (select id from auth.users where lower(email) = 'bd9356@gmail.com')
order by 1 desc, 2;
