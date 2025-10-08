import { createClient } from '@sanity/client'
import type { SanityClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || ''
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster responses
})

// Helper function to fetch all projects
export async function getProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      featured
    }
  `)
}

// Helper function to fetch featured projects only
export async function getFeaturedProjects() {
  return await client.fetch(`
    *[_type == "project" && featured == true] | order(_createdAt desc) {
      _id,
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      featured
    }
  `)
}

// Helper function to fetch a single project by slug
export async function getProjectBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      featured,
      overview,
      technologies,
      features,
      challenges,
      solution,
      outcome,
      liveUrl,
      githubUrl
    }
  `, { slug })
}

// Helper function to fetch hero section
export async function getHero() {
  return await client.fetch(`
    *[_type == "hero"][0] {
      introduction,
      "headshotImage": headshotImage.asset->url
    }
  `)
}

// Helper function to fetch all testimonials
export async function getTestimonials() {
  return await client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      position,
      company,
      message,
      "image": image.asset->url,
      order
    }
  `)
}

// Helper function to fetch about page content
export async function getAboutPage() {
  return await client.fetch(`
    *[_type == "aboutPage"][0] {
      pageTitle,
      sections[] {
        _type,
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
  `)
}

// Helper function to fetch all skills
export async function getSkills() {
  return await client.fetch(`
    *[_type == "skill"] | order(order asc) {
      _id,
      name,
      "iconLight": iconLight.asset->url,
      "iconDark": iconDark.asset->url,
      order
    }
  `)
}

// Helper function to fetch all social links
export async function getSocialLinks() {
  return await client.fetch(`
    *[_type == "socialLink"] | order(order asc) {
      _id,
      platform,
      url,
      svgViewBox,
      svgPath,
      order
    }
  `)
}

// Helper function to fetch resume
export async function getResume() {
  return await client.fetch(`
    *[_type == "resume"][0] {
      summary,
      education,
      experience,
      skills,
      activities,
      certifications,
      footnotes
    }
  `)
}
