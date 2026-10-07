'use client'

// A plain link that also sends one GA4 event when clicked. Navigation is never blocked.

import Link from 'next/link'
import { trackEvent } from '@/lib/community'

export default function TrackedLink({ href, event, params, external, style, children }: {
  href: string
  event: string
  params: Record<string, string>
  external?: boolean
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  const onClick = () => trackEvent(event, { ...params, transport_type: 'beacon' })
  return external
    ? <a href={href} onClick={onClick} style={style}>{children}</a>
    : <Link href={href} onClick={onClick} style={style}>{children}</Link>
}
