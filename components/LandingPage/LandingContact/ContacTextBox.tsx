import { Title } from "@/design-system/index";

const ContactTextBox = () => {
  return (
    <div className="col-span-1  ">
      <div className="w-full max-w-lg">
        <Title
          as="h3"
          size={"sectionSubtitle"}
          className="section-subtitle mb-2 text-white/60 text-center md:text-start"
        >
          Contacto
        </Title>
        <div>
          <Title
            as="h2"
            size={"sectionTitle"}
            className="text-white text-3xl mb-4 font-bold tracking-tighter text-center md:text-start"
          >
            Amplifica tu éxito comercial: Potencia tus ventas con nuestra
            solución avanzada
          </Title>
          <p className="text-white/80 text-base pr-10 tracking-tighter text-center md:text-start mb-8">
            Automatización potente y mayor satisfacción del cliente con nuestro
            chatbot inteligente.
          </p>
        </div>

        <div className="hidden md:block md:mt-80">
          <p className="text-white/80 text-start text-sm mb-4  tracking-tighter">
            "El bot para mi tienda de comercio electrónico ha sido
            transformador. Mejoró la interacción con los clientes, impulsó las
            ventas y automatizó tareas. ¡Lo recomiendo ampliamente para mejorar
            cualquier negocio en línea!"
          </p>
          <div className="flex flex-row gap-x-2  items-center justify-start">
            <div className="h-10 w-10 rounded-full bg-yellow-500" />
            <h3 className="text-white/80 tracking-tighter">Samir Jabib</h3>
            <div className="h-3  border border-white/60" />
            <p className=" text-white/60 text-sm tracking-tighter">
              Propietario de E-commerce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTextBox;
