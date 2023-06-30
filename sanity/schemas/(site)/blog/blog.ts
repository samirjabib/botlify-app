import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogRecord',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'title',
      validation: (Rule) => Rule.required().min(5).max(50),
    }),
    defineField({
      description: 'The author of the blog post',
      name: 'description',
      title: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'object',
      title: 'Image',
      fields: [
        {title: 'Image file', name: 'imageFile', type: 'file', options: {accept: 'image/*'}},
        {title: 'Image URL', name: 'imageURL', type: 'url'},
      ],
      validation: (Rule) =>
        Rule.required().custom((value: any) => {
          if (!value.imageFile && !value.imageURL) {
            return 'You must provide an image file or URL'
          }
          return true
        }),
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
      name: 'date',
      type: 'datetime',
      title: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
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
