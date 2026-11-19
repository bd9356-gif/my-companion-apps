// Chef Jen AI logo for the generated recipe pictures (approved Nov 2026).
// The approved artwork with its cream background made transparent — nothing else changed.
// Read from the filesystem once and handed to next/og as a data URL (like the fonts).

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

/** Logo width ÷ height (960 × 594). */
export const LOGO_RATIO = 960 / 594

let logoCache: Promise<string> | null = null

export function chefJenLogo(): Promise<string> {
  if (!logoCache) {
    logoCache = readFile(join(process.cwd(), 'assets/og-brand/chef-jen-logo.png'))
      .then((b) => `data:image/png;base64,${b.toString('base64')}`)
    logoCache.catch(() => { logoCache = null })
  }
  return logoCache
}
