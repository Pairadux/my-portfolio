import { getAboutPage } from '$lib/sanity/client'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  const aboutPage = await getAboutPage()
  return {
    aboutPage
  }
}
