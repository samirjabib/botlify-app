import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog Record',
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
        {title: 'Image file', name: 'imageFile', type: 'file'},
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
      type: 'date',
      title: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
  ],
})
