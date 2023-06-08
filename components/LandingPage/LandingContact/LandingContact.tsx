import { FloatingInput } from "../../../design-system";

const LandingContact = () => {
  return (
    <div className="bg-darkGray w-full py-12">
      <div className="grid grid-cols-2 wrapper justify-center space-x-12">
        {/* text-box first row */}
        <div className="col-span-1 border-green-500 border-2">
          <button>Contactanos</button>
          <div>
            <h2>Llena tu informacion y nos pondremos en contacto contigo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              optio quia debitis? Ullam laborum dicta laudantium fugit
              asperiores, rem eveniet?
            </p>
          </div>

          <div></div>
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
