import { Title } from "../../../design-system";

const HeroTextBox = () => {
  return (
    <div className=" col-span-1 ">
      <div className="flex flex-col items-center md:items-start">
        <Title
          className="max-w-[550px] text-white mb-4"
          intent={"primary"}
          size={"mainTitle"}
          as="h1"
        >
          Impulsa tu negocio con bots inteligentes
        </Title>
        <p className="text-base sm:text-lg text-white/80 tracking-tighter  font-medium max-w-[550px] text-center md:text-start">
          Aumenta la productividad y mejora tu servicio con nuestros bots
          inteligentes. Automatiza tareas, optimiza recursos y alcanza
          resultados excepcionales. Descubre cómo nuestra tecnología innovadora
          potencia tu negocio y lo lleva al siguiente nivel.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row w-full md:w-[50%]  gap-x-3 gap-y-3 mt-8 sm:mt-16 justify-center md:justify-start">
        <button className="flex-1 text-lg bg-blue transition-all hover:bg-hoverBlue rounded-md cursor-pointer text-white font-bold px-6 py-2 shadow-lg">
          Contactanos
        </button>
        <button className="flex-1  text-lg border-[0.5px] rounded-md border-white/30 transition-all hover:bg-white/10 cursor-pointer text-white font-extrabold px-6 py-2 shadow-lg">
          Servicios
        </button>
      </div>
    </div>
  );
};

export default HeroTextBox;
