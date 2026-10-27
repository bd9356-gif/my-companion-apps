// Advance widths (in em) for the bundled preview-card fonts, used to estimate
// line wrapping so the ingredient list can be sized to fit. Generated from the
// font files in assets/og-fonts with fontTools. Unknown characters use AVG.

const INTER_CHARS = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~½¼¾°–—‘’“”éèñ×…"
const INTER_W = [0.267,0.304,0.494,0.639,0.646,0.993,0.653,0.313,0.369,0.369,0.521,0.667,0.303,0.462,0.303,0.37,0.646,0.415,0.616,0.627,0.656,0.603,0.63,0.571,0.629,0.63,0.303,0.315,0.667,0.667,0.667,0.527,0.982,0.709,0.657,0.733,0.722,0.603,0.589,0.748,0.745,0.272,0.575,0.688,0.565,0.913,0.756,0.767,0.642,0.769,0.648,0.646,0.653,0.74,0.709,1.003,0.701,0.696,0.641,0.369,0.37,0.369,0.477,0.463,0.337,0.568,0.618,0.577,0.618,0.587,0.379,0.62,0.602,0.252,0.252,0.559,0.252,0.888,0.602,0.604,0.618,0.618,0.387,0.539,0.34,0.602,0.575,0.829,0.557,0.575,0.559,0.44,0.346,0.44,0.667,0.858,0.817,0.895,0.457,0.5,1.0,0.277,0.277,0.474,0.471,0.587,0.587,0.602,0.667,0.91]
export const INTER_AVG = 0.57

const SERIF_CHARS = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~½¼¾°–—‘’“”éèñ×…"
const SERIF_W = [0.218,0.343,0.471,0.566,0.562,0.97,0.751,0.235,0.409,0.409,0.459,0.563,0.312,0.352,0.312,0.39,0.569,0.569,0.569,0.569,0.569,0.569,0.569,0.569,0.569,0.569,0.312,0.312,0.563,0.563,0.563,0.448,0.905,0.712,0.686,0.664,0.751,0.63,0.608,0.727,0.803,0.4,0.409,0.744,0.614,0.925,0.746,0.746,0.655,0.746,0.728,0.578,0.671,0.756,0.703,1.037,0.685,0.667,0.599,0.38,0.39,0.38,0.563,0.543,0.4,0.57,0.643,0.535,0.634,0.547,0.381,0.591,0.66,0.344,0.325,0.64,0.346,0.969,0.662,0.602,0.644,0.626,0.497,0.487,0.379,0.654,0.584,0.866,0.603,0.598,0.506,0.371,0.315,0.371,0.563,0.97,0.936,0.936,0.344,0.543,0.843,0.248,0.248,0.483,0.482,0.547,0.547,0.662,0.563,0.884]
export const SERIF_AVG = 0.581
function table(chars: string, widths: number[]): Map<string, number> {
  const m = new Map<string, number>()
  Array.from(chars).forEach((ch, i) => m.set(ch, widths[i]))
  return m
}
const INTER = table(INTER_CHARS, INTER_W)
const SERIF = table(SERIF_CHARS, SERIF_W)

/** Width of `text` in em for the ingredient font (Inter Medium). */
export function interWidth(text: string): number {
  let w = 0
  for (const ch of text) w += INTER.get(ch) ?? INTER_AVG
  return w
}

/** Width of `text` in em for the title font (Source Serif 4 Bold). */
export function serifWidth(text: string): number {
  let w = 0
  for (const ch of text) w += SERIF.get(ch) ?? SERIF_AVG
  return w
}
