import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'authorRecord',
  title: 'Author',
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
  ],
})
