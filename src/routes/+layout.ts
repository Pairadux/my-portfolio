import { getSocialLinks, getTestimonials } from '$lib/sanity/client'
import type { LayoutLoad } from './$types'

export const prerender = true;

export const load: LayoutLoad = async () => {
  const [socialLinks, testimonials] = await Promise.all([
      getSocialLinks(), 
      getTestimonials()
  ])

  return {
    socialLinks,
    testimonials
  }
}
