// The More Than Recipes presentation ("the show"), used on the MyRecipe homepage
// (/myrecipe) and on /more-than-recipes:
//   Act 1  More Than Recipes banner (/more-than-recipes only; the homepage Playbill opens with it)
//   Act 2  the Playbill video (homepage) or the Chef Jen slideshow (/more-than-recipes)
//   Act 3  "Choose What Interests You. See What's Possible."  (in Booths)
//   Act 4  the six cards                                       (in Booths)
// Settings (slides, cards, links, video): ./config.ts

import Presentation from './Presentation'
import PlaybillVideo from './PlaybillVideo'
import Booths from './Booths'
import { BOOTHS_BANNER } from './config'

/** `scrollOffset`: room to leave above the cards when the last slide's
 *  "Explore More →" scrolls to them (e.g. the height of a sticky menu).
 *  `playbill`: show the three-slide Playbill video instead of the slideshow. */
export default function Show({ scrollOffset = 8, playbill = false }: { scrollOffset?: number; playbill?: boolean }) {
  return (
    <>
      {/* Banner: shown at its own size (never stretched), centered, smaller on narrow phones.
          Not on the homepage: the Playbill's first slide already says More Than Recipes. */}
      {!playbill && <picture>
        <source type="image/webp" srcSet={`/more-than-recipes/${BOOTHS_BANNER.img}.webp`} />
        <img
          src={`/more-than-recipes/${BOOTHS_BANNER.img}.png`}
          alt={BOOTHS_BANNER.alt}
          width={BOOTHS_BANNER.width}
          height={BOOTHS_BANNER.height}
          style={{ display: 'block', width: '100%', maxWidth: BOOTHS_BANNER.width, height: 'auto', margin: '0 auto 6px' }}
        />
      </picture>}

      {playbill ? <PlaybillVideo /> : <Presentation />}

      {/* Cards — "Explore More →" on the last slide scrolls here */}
      <section id="booths" aria-label="Explore what Chef Jen can help with" style={{ paddingTop: 4, scrollMarginTop: scrollOffset }}>
        <Booths />
      </section>
    </>
  )
}
