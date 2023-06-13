import { groq } from 'next-sanity'
import { LandingPageRecord } from 'sanity/types/schema';
import sanityClient from '../sanity';

export const landingPageQuery = `*[_type == "landingPageRecord" ][0] {
    titleHeroBox,
    contentHeroBox,
    contactButtonText,
    servicesButtonText,
    "imageHeroBox": imageHeroBox.asset->url,
    titleServices,
    subtitleServices
  }`;

