export type Testimonial = {
    id: number;
    quote: string;
    author: string;
    occupation: string;
  };
const mockData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Compré un bot para mi tienda de comercio electrónico y ha sido un cambio radical. El bot ha mejorado considerablemente la interacción con los clientes y ha impulsado las ventas. Es una herramienta poderosa que automatiza diversas tareas y brinda soporte personalizado a los compradores. Lo recomiendo ampliamente a cualquiera que busque mejorar su negocio de comercio electrónico.",
    author: "Samir Jabib",
    occupation: "Propietario de E-commerce",
  },
  {
    id: 2,
    quote:
      "Decidí probar este bot para mi tienda en línea y ha sido una excelente decisión. Ha mejorado la experiencia de compra de mis clientes al ofrecer respuestas rápidas y precisas a sus preguntas frecuentes. Además, me ha ayudado a gestionar eficientemente las consultas de soporte, liberando tiempo para enfocarme en otras áreas del negocio. Estoy muy satisfecho con los resultados obtenidos.",
    author: "Carolina Torres",
    occupation: "Propietaria de Tienda Online",
  },
  {
    id: 3,
    quote:
      "Desde que implementé este bot en mi negocio de comercio electrónico, he experimentado un aumento significativo en las conversiones y ventas. El bot ha sido capaz de recomendar productos personalizados de manera precisa, lo que ha generado un mayor interés y satisfacción entre mis clientes. Además, la capacidad de automatizar tareas repetitivas me ha permitido optimizar la eficiencia operativa. Recomiendo encarecidamente este bot a todos los propietarios de tiendas en línea.",
    author: "Luis Rodríguez",
    occupation: "Emprendedor en línea",
  },
];

export default mockData;
