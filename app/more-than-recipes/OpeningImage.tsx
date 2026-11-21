// The homepage opening (Nov 2026): one static picture — More Than Recipes. Experience the
// Future of Home Cooking. With Chef Jen. Your AI Cooking Companion. (01-main-web-opening.png)
// Replaces the rotating Playbill. The same picture on every screen: full width of the page,
// its own shape (never cropped or stretched), rounded corners. WebP in four sizes so phones
// load a small file; the browser picks the size it needs.

const W = 2170
const H = 725

export default function OpeningImage() {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/myrecipe/opening-800.webp 800w, /myrecipe/opening-1200.webp 1200w, /myrecipe/opening-1600.webp 1600w, /myrecipe/opening-2170.webp 2170w"
        sizes="(min-width: 1180px) 1108px, calc(100vw - 32px)"
      />
      <img
        src="/myrecipe/opening.jpg"
        alt="More Than Recipes. Experience the Future of Home Cooking. With Chef Jen — Your AI Cooking Companion."
        width={W}
        height={H}
        fetchPriority="high"
        style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${W} / ${H}`, borderRadius: 16, backgroundColor: '#F5F0EA', boxShadow: '0 4px 20px rgba(44,24,16,0.12)', marginBottom: 12 }}
      />
    </picture>
  )
}
