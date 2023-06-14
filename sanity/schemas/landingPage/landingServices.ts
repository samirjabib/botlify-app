import { defineField, defineType } from "sanity";


export default defineType({
  name: 'landingServicesRecord',
  title: 'Landing Services',
  type: 'object',
  fields:[
    defineField({
        name: 'titleServices',
        type: 'string',
        title: 'Title Services',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'subtitleServices',
        type: 'string',
        title: 'Subtitle Services',
        validation: (Rule) => Rule.required(),
      }),
      // defineField({
      //   name: 'contentServices',
      //   type: 'array',
      //   title: 'Content Services',
      //   of: [{type: 'contentServices'}],
      // })
  ]
})

