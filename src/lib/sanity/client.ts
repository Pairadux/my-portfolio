import { createClient } from '@sanity/client'
import type { SanityClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || ''
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

async function safeFetch<T>(query: string, params?: Record<string, any>, fallback: T = null as T): Promise<T> {
  try {
    return await client.fetch(query, params)
  } catch (error) {
    console.warn('Sanity fetch failed:', error)
    return fallback
  }
}

export async function getProjects() {
  return await safeFetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      featured,
      order
    }
  `, undefined, [])
}

export async function getFeaturedProjects() {
  return await safeFetch(`
    *[_type == "project" && featured == true] | order(order asc) {
      _id,
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      featured,
      order
    }
  `, undefined, [])
}

export async function getProjectBySlug(slug: string) {
  return await safeFetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      featured,
      order,
      overview,
      technologies,
      features,
      challenges,
      solution,
      outcome,
      liveUrl,
      githubUrl
    }
  `, { slug }, null)
}

export async function getHero() {
  return await safeFetch(`
    *[_type == "hero"][0] {
      introduction,
      "headshotImage": headshotImage.asset->url
    }
  `, undefined, null)
}

export async function getTestimonials() {
  return await safeFetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      position,
      company,
      message,
      "image": image.asset->url,
      order
    }
  `, undefined, [])
}

export async function getAboutPage() {
  return await safeFetch(`
    *[_type == "aboutPage"][0] {
      pageTitle,
      sections[] {
        _type,
        _type == "headingSection" => {
          text,
          level
        },
        _type == "textSection" => {
          content
        },
        _type == "imageSection" => {
          "image": image.asset->url,
          alt,
          caption
        }
      }
    }
  `, undefined, null)
}

export async function getSkills() {
  return await safeFetch(`
    *[_type == "skill"] | order(order asc) {
      _id,
      name,
      "iconLight": iconLight.asset->url,
      "iconDark": iconDark.asset->url,
      order
    }
  `, undefined, [])
}

export async function getSocialLinks() {
  return await safeFetch(`
    *[_type == "socialLink"] | order(order asc) {
      _id,
      platform,
      url,
      svgViewBox,
      svgPath,
      order
    }
  `, undefined, [])
}

export async function getResume() {
  return await safeFetch(`
    *[_type == "resume"][0] {
      summary,
      education,
      experience,
      skills,
      activities,
      certifications,
      footnotes
    }
  `, undefined, null)
}

export async function getHaikus() {
  return await safeFetch(`
    *[_type == "haiku"] | order(order asc) {
      _id,
      title,
      line1,
      line2,
      line3,
      order
    }
  `, undefined, [])
}
