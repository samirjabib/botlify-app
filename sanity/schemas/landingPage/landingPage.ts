import {defineType} from 'sanity'
import landingHero from './landingHero/landingHero';



export default defineType({
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
      {
        name:'landingHero',
        title:'Landing Hero',
        type:'landingHero'
      }
    ],
  })