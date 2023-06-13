import {createClient,ClientConfig} from 'next-sanity'
import { cache } from 'react'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION 

const config: ClientConfig = {
  projectId,
  dataset,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion
}

const sanityClient = createClient(config)

// Wrap the cache function in a way that reuses the TypeScript definitions
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))



export default clientFetch;