import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingHeroRecord',
  title: 'Landing Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleHeroBox',
      type: 'string',
      title: 'Title Hero Box',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contentHeroBox',
      type: 'text',
      title: 'Content Hero Box',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactButtonText',
      type: 'string',
      title: 'Contact Button Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'servicesButtonText',
      type: 'string',
      title: 'Services Button Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageHeroBox',
      type: 'image',
      title: 'Image Hero Box',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
