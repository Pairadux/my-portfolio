import { getResume } from '$lib/sanity/client'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  const resume = await getResume()
  return {
    resume
  }
}
