import { getHero, getFeaturedProjects, getSkills } from '$lib/sanity/client'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  const [hero, featuredProjects, skills] = await Promise.all([
    getHero(),
    getFeaturedProjects(),
    getSkills()
  ])

  return {
    hero,
    featuredProjects,
    skills
  }
}
