import { defineType } from 'sanity'

export default defineType({
  name: 'servicesItem',
  title: 'Services Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name:'link',
      type:'string',
      title:'Link',
      validation: (Rule) => Rule.required(),

    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ]
});