import {defineField, defineType} from 'sanity'

// Import the landingHero type
import landingHero from './landingHero'
import landingServices from './landingServices'

export default defineType({
  name: 'landingPageRecord',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'landingHero',
      type: 'object',
      title: 'Landing Hero',
      fields: [...landingHero.fields],
    }),
    defineField({
      name: 'landingServices',
      type: 'object',
      title: 'Landing Services',
      fields: [
        ...landingServices.fields,
      ],
    })
  ],
})
