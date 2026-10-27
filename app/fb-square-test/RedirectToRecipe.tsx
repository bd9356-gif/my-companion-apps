'use client'
// TEMPORARY — part of the Facebook square preview test. Remove after testing.
import { useEffect } from 'react'

export default function RedirectToRecipe({ href }: { href: string }) {
  useEffect(() => { window.location.replace(href) }, [href])
  return null
}
