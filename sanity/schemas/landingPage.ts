import {defineType} from 'sanity'

export default defineType({
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
      {
        name:'landingHero',
        type:'document',
        title:'Landing Hero',
        
        fields:[
          {
            name:'tileHeroBox',
            type:'string',
            title:'Title Hero Box',
            validation: (Rule) => Rule.required(),
          },
          {
            name:'contentHeroBox',
            type:'text',
            title:'Content Hero Box',
            validation: (Rule) => Rule.required(),
          },
          {
            name:'contactButtonText',
            type:'string',
            title:'Contact Button Text',
            validation: (Rule) => Rule.required(),

          },
          {
            name:'servicesButtonText',
            type:'string',
            title:'Services Button Text',
            validation: (Rule) => Rule.required(),

          },
          {
            name:'imageHeroBox',
            type:'image',
            title:'Image Hero Box',
            validation: (Rule) => Rule.required(),
            options:{
              hotspot:true,
            }
          },
        ]
      },
      {
        name:'landingServices',
        type:'document',
        title:'Landing Services',
        fields:[
          {
            name:'titleServices',
            type:'string',
            title:'Title Services',
            validation: (Rule) => Rule.required(),

          },
          {
            name:'subtitleServices',
            type:'string',
            title:'Subtitle Services',
            validation: (Rule) => Rule.required(),
          },
       
        ]
      },
    ],
  })