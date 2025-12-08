import { getHaikus } from '$lib/sanity/client'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  const haikus = await getHaikus()
  return {
    haikus
  }
}
