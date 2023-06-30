import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categoryRecord',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'name',
      validation: (Rule) => Rule.required().min(5).max(50),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
      validation: (Rule) => Rule.required().uri({allowRelative: true}),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(50).max(200),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
