import Image from "next/image";

const LandingHero = () => {
  return (
    <div className="w-full   wrapper mt-44">
      <div className="grid grid-cols-2">
        <div className="">
          <h1 className="text-white text-5xl font-bold mb-4 tracking-tighter max-w-[550px]">
            Impulsa tu negocio con bots inteligentes
          </h1>
          <p className="text-lg text-white/80 tracking-tighter mb-4 font-medium max-w-[550px]">
            Aumenta la productividad y mejora tu servicio con nuestros bots
            inteligentes. Automatiza tareas, optimiza recursos y alcanza
            resultados excepcionales. Descubre cómo nuestra tecnología
            innovadora puede potenciar tu negocio y llevarlo al siguiente nivel.
          </p>
          <div className="flex w-[50%] gap-x-3 ">
            <button className="flex-1 text-lg bg-blue cursor-pointer text-white font-bold px-6 py-2 shadow-lg">
              Contactanos
            </button>
            <button className="flex-1  text-lg border-[0.5px] border-white/30 cursor-pointer text-white font-extrabold px-6 py-2 shadow-lg">
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
