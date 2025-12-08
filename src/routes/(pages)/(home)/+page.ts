import { getHero, getTestimonials, getFeaturedProjects, getSkills } from '$lib/sanity/client'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  const [hero, testimonials, featuredProjects, skills] = await Promise.all([
    getHero(),
    getTestimonials(),
    getFeaturedProjects(),
    getSkills()
  ])

  return {
    hero,
    testimonials,
    featuredProjects,
    skills
  }
}
