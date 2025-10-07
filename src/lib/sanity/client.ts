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
      content,
      technologies,
      liveUrl,
      githubUrl
    }
  `, { slug })
}
