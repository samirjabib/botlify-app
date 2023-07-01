import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesRecord',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'title',
      validation: (Rule) => Rule.required().min(5).max(50),
    }),
    defineField({
      description: 'Description of the service',
      name: 'description',
      title: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      title: 'isFeatured',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'checkbox',
      },
      initialValue: false,
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'features',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'category',
      to: [{type: 'categoryRecord'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'author',
      to: [{type: 'authorRecord'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
