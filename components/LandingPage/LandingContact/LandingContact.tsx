import { FloatingInput } from "../../../design-system";

const LandingContact = () => {
  return (
    <div className="bg-darkGray w-full py-12">
      <div className="grid grid-cols-2 wrapper justify-center space-x-12">
        {/* text-box first row */}
        <div className="col-span-1 border-green-500 border-2 px-8">
          <button>Contactanos</button>
          <div>
            <h2 className="text-white">
              Amplifica tu éxito comercial: Potencia tus ventas con nuestra
              solución avanzada
            </h2>
            <p className="text-white/80">
              Automatización potente y mayor satisfacción del cliente con
              nuestro chatbot inteligente.
            </p>
          </div>

          <div>
            <p className="text-white/80 text-start text-sm ">
              "El bot para mi tienda de comercio electrónico ha sido
              transformador. Mejoró la interacción con los clientes, impulsó las
              ventas y automatizó tareas. ¡Lo recomiendo ampliamente para
              mejorar cualquier negocio en línea!"
            </p>
            <div className="flex flex-row gap-x-2   justify-start">
              <div className="h-8 w-8 bg-yellow-500 rounded-full" />
              <h3 className="text-white/80">Samir Jabib</h3>
              <div className="h-3  border border-white/60" />
              <p className=" text-white/60 text-sm">
                Propietario de E-commerce
              </p>
            </div>
          </div>
        </div>
        {/* form second col */}
        <div className="col-span-1  w-full border-yellow-500 border-2 flex justify-center">
          <form className="bg-gray shadow-lg px-4 py-8 w-full max-w-lg ">
            <FloatingInput />
            <FloatingInput />
            <FloatingInput />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
