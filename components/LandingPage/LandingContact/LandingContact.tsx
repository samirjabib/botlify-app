import { FloatingInput } from "../../../design-system";
import { Textarea } from "../../Client/ui/textarea";

const LandingContact = () => {
  return (
    <div className="bg-darkGray w-full py-12">
      <div className="grid grid-cols-2 wrapper justify-center space-x-12">
        {/* text-box first row */}
        <div className="col-span-1   px-8 ">
          <div className="w-full max-w-lg">
            <h3 className="sub-title mb-2">Contacto</h3>
            <div>
              <h2 className="text-white text-3xl mb-4 font-bold ">
                Amplifica tu éxito comercial: Potencia tus ventas con nuestra
                solución avanzada
              </h2>
              <p className="text-white/80 text-base pr-10">
                Automatización potente y mayor satisfacción del cliente con
                nuestro chatbot inteligente.
              </p>
            </div>

            <div className="mt-80">
              <p className="text-white/80 text-start text-sm mb-4 ">
                "El bot para mi tienda de comercio electrónico ha sido
                transformador. Mejoró la interacción con los clientes, impulsó
                las ventas y automatizó tareas. ¡Lo recomiendo ampliamente para
                mejorar cualquier negocio en línea!"
              </p>
              <div className="flex flex-row gap-x-2  items-center justify-start">
                <div className="h-12 w-12 rounded-full" />
                <h3 className="text-white/80">Samir Jabib</h3>
                <div className="h-3  border border-white/60" />
                <p className=" text-white/60 text-sm">
                  Propietario de E-commerce
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* form second col */}
        <div className="col-span-1  w-full  flex justify-center">
          <form className="bg-gray shadow-2xl px-7 py-8 w-full max-w-lg ">
            <FloatingInput />
            <FloatingInput />
            <FloatingInput />
            <Textarea />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
