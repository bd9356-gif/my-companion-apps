// The homepage opening (Nov 2026): one static picture — More Than Recipes. Experience the
// Future of Home Cooking. With Chef Jen. Your AI Cooking Companion. (02-main-opening.png,
// the taller remake, with larger lettering so it reads on an iPhone). The same picture on
// every screen: full width of the page, its own shape (never cropped or stretched). The
// artwork carries its own rounded orange border; the white outside it is made clear so it
// sits on the page like the cards. WebP in three sizes; the browser picks the one it needs.

const W = 1838
const H = 856

export default function OpeningImage() {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/myrecipe/opening2-800.webp 800w, /myrecipe/opening2-1200.webp 1200w, /myrecipe/opening2-1838.webp 1838w"
        sizes="(min-width: 1180px) 1108px, calc(100vw - 32px)"
      />
      <img
        src="/myrecipe/opening2.png"
        alt="More Than Recipes. Experience the Future of Home Cooking. With Chef Jen — Your AI Cooking Companion."
        width={W}
        height={H}
        fetchPriority="high"
        style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${W} / ${H}`, filter: 'drop-shadow(0 3px 8px rgba(44,24,16,0.14))', marginBottom: 12 }}
      />
    </picture>
  )
}
