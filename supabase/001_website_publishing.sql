-- 001_website_publishing.sql  (MyCompanionApps Website Publishing Admin — V1)
--
-- Run once in the Supabase SQL editor (project epgtahifcphwjifxmxst).
-- Idempotent: safe to re-run.
--
-- WHAT IT DOES
--   1. Adds publishing columns:
--        personal_recipes: published, web_slug, web_collection
--        notes (Chef Jen tips): published, web_slug
--      New rows default to published = false.
--   2. Adds a guard trigger so the app / app users can never change the
--      publishing columns. Only the website admin (service role) can.
--      Once a web_slug (public address) is assigned it can never change.
--      App edits to title/ingredients/photo/etc. are untouched.
--   3. Gives the existing website recipes their CURRENT addresses
--      (so every Pinterest/Facebook/Google link keeps working) and
--      collections. Only Crispy Chicken Tacos is published for the
--      proof of concept; the rest stay on their existing static pages
--      until the proof of concept passes.
--   4. Prints a report so you can confirm every recipe matched your account.
--
-- The app needs NO changes for this.

begin;

-- ── 1. Columns ─────────────────────────────────────────────────────────
alter table public.personal_recipes
  add column if not exists published boolean not null default false,
  add column if not exists web_slug text,
  add column if not exists web_collection text;

alter table public.personal_recipes
  drop constraint if exists personal_recipes_web_collection_check;
alter table public.personal_recipes
  add constraint personal_recipes_web_collection_check
  check (web_collection is null
         or web_collection in ('everyday-favorites', 'crowd-pleaser-classics'));

create unique index if not exists personal_recipes_web_slug_key
  on public.personal_recipes (web_slug) where web_slug is not null;
create index if not exists personal_recipes_published_idx
  on public.personal_recipes (published) where published = true;

alter table public.notes
  add column if not exists published boolean not null default false,
  add column if not exists web_slug text;

create unique index if not exists notes_web_slug_key
  on public.notes (web_slug) where web_slug is not null;
create index if not exists notes_published_idx
  on public.notes (published) where published = true;

-- ── 2. Guard trigger ───────────────────────────────────────────────────
-- auth.role() is 'anon' / 'authenticated' for app + browser requests,
-- 'service_role' for the website admin API, and empty in the SQL editor.
create or replace function public.guard_web_publishing()
returns trigger
language plpgsql
as $$
declare
  r text := coalesce(auth.role(), '');
begin
  -- App users can never publish, re-address, or re-collection anything.
  if r in ('anon', 'authenticated') then
    if tg_op = 'INSERT' then
      new.published := false;
      new.web_slug := null;
      if tg_table_name = 'personal_recipes' then new.web_collection := null; end if;
    else
      new.published := old.published;
      new.web_slug := old.web_slug;
      if tg_table_name = 'personal_recipes' then new.web_collection := old.web_collection; end if;
    end if;
  end if;

  -- A public address, once assigned, is permanent (admin included).
  -- Only a manual fix in the SQL editor (r = '') can change it.
  if tg_op = 'UPDATE' and r <> '' and old.web_slug is not null
     and new.web_slug is distinct from old.web_slug then
    new.web_slug := old.web_slug;
  end if;

  return new;
end
$$;

drop trigger if exists guard_web_publishing on public.personal_recipes;
create trigger guard_web_publishing
  before insert or update on public.personal_recipes
  for each row execute function public.guard_web_publishing();

drop trigger if exists guard_web_publishing on public.notes;
create trigger guard_web_publishing
  before insert or update on public.notes
  for each row execute function public.guard_web_publishing();

-- ── 3. Existing website recipes keep their exact current addresses ─────
drop table if exists website_recipe_map;
create temp table website_recipe_map (id uuid, slug text, collection text, pub boolean);
insert into website_recipe_map values
  -- Everyday Favorites
  ('AC7FC26B-E0C1-41BB-A625-3BB173F35A31', 'crispy-chicken-tacos',        'everyday-favorites',     true),  -- proof of concept
  ('F7E1EC02-1620-4CB2-B922-EF86D9FC9AE8', 'sheet-pan-chicken-veggies',   'everyday-favorites',     false),
  ('D16F1E5E-AC0F-4DB6-B5E2-7FF5D2925524', 'spaghetti-stuffed-peppers',   'everyday-favorites',     false),
  ('9125C52E-AB5F-4667-A290-188DFA29F6A5', 'cheeseburger-casserole',      'everyday-favorites',     false),
  ('E9A3CCF1-C35E-4C82-8527-D0815A1F47FB', 'creamy-garlic-pasta',         'everyday-favorites',     false),
  ('E8B1A60F-EC92-40C5-8F48-585EC829D056', 'banana-split-smoothie',       'everyday-favorites',     false),
  -- Crowd-Pleaser Classics
  ('96A1A0A7-96C5-44AD-B8C8-2EFD7ECD243D', 'florida-yellow-snapper',      'crowd-pleaser-classics', false),
  ('0EDBAE0C-7AB1-4101-A95E-06EEEFADB696', 'shrimp-scampi-classic',       'crowd-pleaser-classics', false),
  ('A3D8D3CE-8902-48D4-B818-4B516E8ADFAB', 'linguine-puttanesca-classic', 'crowd-pleaser-classics', false),
  ('69C7C314-2979-4634-A065-804684817984', 'italian-sausage-gnocchi',     'crowd-pleaser-classics', false),
  ('0245A011-AE9E-461C-A81B-F217E345470A', 'italian-cream-cake',          'crowd-pleaser-classics', false),
  ('A0456CE5-C6FC-4DE2-A114-EB839DD09BD3', 'lemon-pecorino-chicken',      'crowd-pleaser-classics', false),
  -- Older pages not in either collection: address reserved, no collection yet
  ('F53AF4C3-0F5D-4EE0-ABDA-4AA699B4A5FE', 'chicken-spiedini',            null, false),
  ('4E3B8EBF-C937-41BD-A214-9CF2AE9B85A4', 'crab-imperial',               null, false),
  ('4E44CB58-3A8C-4EE2-84E5-5C8597F72D90', 'garlic-grilled-shrimp',       null, false),
  ('17EB7109-9488-42F4-B804-70EFEE5A475C', 'homemade-chicken-stock',      null, false),
  ('A96296B9-4341-4756-9B63-656FA8A965C4', 'linguine-puttanesca',         null, false),
  ('719949F6-D1CF-419A-ABE8-C36F52A3423C', 'one-pan-italian-chicken',     null, false),
  ('B90EA633-5894-4908-B77F-017DB7688165', 'orange-creamsicle-smoothie',  null, false),
  ('6DB7F78F-160B-46E1-8692-B9DC3C18F5A1', 'shrimp-scampi',               null, false),
  ('742219B6-4606-46B1-88AF-F06271DE8A97', 'tuscan-chicken-pasta',        null, false);

-- Only touch rows on Bill's account; only set a slug where none exists yet.
update public.personal_recipes p
set web_slug       = coalesce(p.web_slug, m.slug),
    web_collection = coalesce(p.web_collection, m.collection),
    published      = case when m.pub then true else p.published end
from website_recipe_map m
where p.id = m.id
  and p.user_id = (select id from auth.users where lower(email) = 'bd9356@gmail.com');

commit;

-- ── 4. Report: every row should say OK ─────────────────────────────────
select m.slug,
       case
         when p.id is null then 'MISSING — recipe id not found'
         when p.deleted_at is not null then 'DELETED in app (Recently Deleted)'
         when p.user_id <> (select id from auth.users where lower(email) = 'bd9356@gmail.com')
           then 'NOT ON BILL''S ACCOUNT — skipped'
         when p.web_slug is distinct from m.slug then 'SLUG CONFLICT — has ' || coalesce(p.web_slug, 'none')
         else 'OK'
       end as status,
       p.title, p.web_collection, p.published
from website_recipe_map m
left join public.personal_recipes p on p.id = m.id
order by m.collection nulls last, m.slug;
