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
        <button className="flex-1 text-lg main-button">Contactanos</button>
        <button className="flex-1  text-lg secundary-button">Servicios</button>
      </div>
    </div>
  );
};

export default HeroTextBox;
