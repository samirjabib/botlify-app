import Image from "next/image";

const LandingHero = () => {
  return (
    <div className="w-full grid grid-cols-2  wrapper mt-44">
      <div className="">
        <div className="">
          <h1 className="text-white text-5xl font-bold mb-4 tracking-tighter ">
            Impulsa tu negocio con bots inteligentes
          </h1>
          <p className="text-lg text-white/80 tracking-tighter mb-4 font-medium">
            Aumenta la productividad y mejora tu servicio con nuestros bots
            inteligentes. Automatiza tareas, optimiza recursos y alcanza
            resultados excepcionales. Descubre cómo nuestra tecnología
            innovadora puede potenciar tu negocio y llevarlo al siguiente nivel.
          </p>
          <div className="flex w-[50%] gap-x-4 ">
            <button className="flex-1 bg-blue cursor-pointer text-white font-bold px-6 py-2">
              Contactanos
            </button>
            <button className="flex-1 border border-white/80 cursor-pointer text-white font-extrabold px-6 py-2">
              Servicios
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper ">
        {/* <Image/> */}
        <div className="" />
      </div>
    </div>
  );
};

export default LandingHero;
