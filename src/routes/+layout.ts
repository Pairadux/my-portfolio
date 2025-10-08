import { getSocialLinks } from '$lib/sanity/client'
import type { LayoutLoad } from './$types'

export const prerender = true;

export const load: LayoutLoad = async () => {
  const socialLinks = await getSocialLinks()

  return {
    socialLinks
  }
}
