import Image from "next/image";

const LandingHero = () => {
  return (
    <div className="w-full flex justify-between  wrapper mt-32">
      <div className=" ">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-tighter ">
          Automatiza tus servicios con nuestros bots inteligentes
        </h1>
        <p className="text-lg text-white/80 tracking-tighter">
          Descubre cómo nuestros bots de última generación pueden simplificar y
          mejorar tus procesos, ahorrándote tiempo y recursos. Maximiza la
          eficiencia de tus servicios y ofrece una experiencia excepcional a tus
          clientes con nuestra tecnología avanzada.
        </p>
        <button className="bg-blue cursor-pointer text-white font-extrabold px-4 py-2">
          Contactanos
        </button>
      </div>
      <div className="wrapper ">
        {/* <Image/> */}
        <div className="" />
      </div>
    </div>
  );
};

export default LandingHero;
