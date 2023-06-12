

export default {
    name: "landingHero",
    title: "Landing Hero",
    type: "object",
    fields: [
      {
        name: "tileHeroBox",
        title: "Title Hero Box",
        type: "string",
      },
      {
        name: "contentHeroBox",
        title: "Content Hero Box",
        type: "string",
      },
      {
        name: "contactButtonText",
        title: "Contact Button Text",
        type: "string",
      },
      {
        name: "servicesButtonText",
        title: "Services Button Text",
        type: "string",
      },
      {
        name: "imageHeroBox",
        title: "Image Hero Box",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };