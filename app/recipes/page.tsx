import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chef Jen Recipes — MyRecipe Companion',
  description: 'Beautiful recipes created by Chef Jen, your AI cooking companion. Everyday Favorites and Crowd-Pleaser Classics.',
  openGraph: {
    title: 'Chef Jen Recipes',
    description: 'Beautiful recipes created by Chef Jen, your AI cooking companion.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790286408639-gbgudepbf9a.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const everydayFavorites = [
  { slug: 'crispy-chicken-tacos', title: 'Crispy Chicken Tacos', description: 'Seasoned shredded chicken and cheese baked between two hot pans for crunch on both sides — no frying required.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790286408639-gbgudepbf9a.jpg' },
  { slug: 'sheet-pan-chicken-veggies', title: 'Sheet Pan Chicken and Veggies', description: 'A fuss-free one-pan dinner that comes together in under 30 minutes with minimal prep and cleanup.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786301155111-lwln9gta79.jpg' },
  { slug: 'spaghetti-stuffed-peppers', title: 'Spaghetti Stuffed Peppers', description: 'Colorful bell peppers filled with leftover spaghetti and baked until tender for an easy, comforting weeknight meal.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788092848210-zwvm1y8jgkh.jpg' },
  { slug: 'cheeseburger-casserole', title: 'Cheeseburger Casserole', description: 'A comforting one-dish meal that combines ground beef, cheese, and pasta for classic cheeseburger flavor.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790363779869-86pjbm4sqct.jpg' },
  { slug: 'creamy-garlic-pasta', title: 'Creamy Garlic Pasta with Lemon', description: 'Silky cream sauce with garlic and bright lemon tossed with pasta for an elegant yet simple weeknight dinner.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788836652306-ugbghw515ui.jpg' },
  { slug: 'banana-split-smoothie', title: 'Banana Split Smoothie', description: 'A creamy, dessert-inspired smoothie that captures all the classic flavors of a banana split in every sip.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788735532783-h3ta8up6uk.jpg' },
]

const crowdPleaserClassics = [
  { slug: 'florida-yellow-snapper', title: 'Pan-Seared Florida Yellow Snapper', description: 'A light and bright coastal favorite featuring fresh yellow snapper fillets topped with a zesty citrus butter sauce.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786887794250-j2xsm988twq.jpg' },
  { slug: 'shrimp-scampi-classic', title: 'Shrimp Scampi', description: 'Succulent garlic and white wine shrimp over pasta or crusty bread.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790181603177-1mgxljd5d22.jpg' },
  { slug: 'linguine-puttanesca-classic', title: 'Linguine Puttanesca', description: 'A bold and briny Italian pasta with olives, capers, anchovies, and tomatoes.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1789744616305-bbrv726qrn.jpg' },
  { slug: 'italian-sausage-gnocchi', title: 'One Pan Italian Sausage Gnocchi', description: 'A creamy one-pan Italian sausage gnocchi ready in 25 minutes — weeknight dinner sorted.', photo: 'https://skinnyspatula.com/wp-content/uploads/2023/08/One_Pan_Italian_Sausage_Gnocchi_0-720x720.jpg' },
  { slug: 'italian-cream-cake', title: 'Italian Cream Cake', description: "A rich, decadent layer cake with cream cheese frosting, coconut, and pecans that's pure indulgence.", photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786301424971-7h0y4vp4uaw.jpg' },
  { slug: 'lemon-pecorino-chicken', title: 'Lemon Pecorino Crusted Chicken', description: 'Golden-crusted chicken with a silky lemon cream sauce — indulgent yet quick enough for any weeknight.', photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790366538582-a07lanj2fr.jpg' },
]

function RecipeCard({ slug, title, description, photo }: { slug: string; title: string; description: string; photo: string }) {
  return (
    <Link href={`/recipes/${slug}`} style={{ textDecoration: 'none' }}>
      <div style={{ backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
        <div style={{ height: 220, overflow: 'hidden' }}>
          <img src={photo} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '16px 18px 20px' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#2C1810', margin: '0 0 8px', lineHeight: 1.3 }}>{title}</h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#78716C', margin: 0, lineHeight: 1.5 }}>{description}</p>
          <div style={{ marginTop: 14, fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#C8401A' }}>View Recipe →</div>
        </div>
      </div>
    </Link>
  )
}

function CollectionSection({ title, subtitle, recipes }: { title: string; subtitle: string; recipes: typeof everydayFavorites }) {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 60px' }}>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: '#2C1810', margin: '0 0 6px' }}>{title}</h2>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#78716C', margin: 0 }}>{subtitle}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
        {recipes.map((recipe) => <RecipeCard key={recipe.slug} {...recipe} />)}
      </div>
    </div>
  )
}

export default function RecipesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif' }}>
      <div style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #F0EBE3', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: 20, fontFamily: 'Georgia, serif', fontWeight: 700, color: '#2C1810' }}>MyCompanionApps</span>
        </Link>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ backgroundColor: '#C8401A', color: 'white', padding: '8px 18px', borderRadius: 10, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700 }}>Get the App</a>
      </div>

      <div style={{ textAlign: 'center', padding: '64px 24px 48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
          <span style={{ fontSize: 16 }}>👩‍🍳</span>
          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#C8401A' }}>Created by Chef Jen</span>
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#2C1810', margin: '0 0 16px', lineHeight: 1.2 }}>Chef Jen's Recipe Collection</h1>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 18, color: '#78716C', maxWidth: 560, margin: '0 auto 12px', lineHeight: 1.6 }}>Every recipe here was created by Chef Jen — your personal AI cooking companion. Tap any recipe to see the full details.</p>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#A89990', maxWidth: 480, margin: '0 auto' }}>
          Want Chef Jen to create a recipe just for you? <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ color: '#C8401A', textDecoration: 'none', fontWeight: 600 }}>Download MyRecipe Companion →</a>
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 48px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid #F0EBE3' }} />
      </div>

      <CollectionSection title="Everyday Favorites" subtitle="Easy, satisfying recipes made for real life." recipes={everydayFavorites} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 48px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid #F0EBE3' }} />
      </div>

      <CollectionSection title="Crowd-Pleaser Classics" subtitle="Familiar favorites worth making again and again." recipes={crowdPleaserClassics} />

      <div style={{ backgroundColor: '#FEF3E8', borderTop: '1px solid #F5D9C0', padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#2C1810', marginBottom: 12 }}>Want Chef Jen to cook for you?</h2>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, color: '#78716C', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>Ask Chef Jen to create any recipe you can imagine — personalized, detailed, and saved directly to your Recipe Vault.</p>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ display: 'inline-block', backgroundColor: '#C8401A', color: 'white', padding: '14px 32px', borderRadius: 14, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 16, fontWeight: 700, boxShadow: '0 4px 14px rgba(200,64,26,0.3)' }}>Try MyRecipe Companion Free →</a>
      </div>

      <div style={{ padding: '24px', textAlign: 'center', borderTop: '1px solid #F0EBE3' }}>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#A89990', margin: 0 }}>
          © 2026 MyCompanionApps &nbsp;·&nbsp;
          <Link href="/privacy" style={{ color: '#A89990', textDecoration: 'none' }}>Privacy</Link>
          &nbsp;·&nbsp;
          <Link href="/terms" style={{ color: '#A89990', textDecoration: 'none' }}>Terms</Link>
        </p>
      </div>
    </div>
  )
}
