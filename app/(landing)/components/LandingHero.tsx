const LandingHero = () => {
  return (
    <div className="w-full  wrapper mt-44">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <h1 className="text-white text-5xl font-bold mb-4 tracking-tighter max-w-[550px] text-center md:text-start">
            Impulsa tu negocio con bots inteligentes
          </h1>
          <p className="text-lg text-white/80 tracking-tighter  font-medium max-w-[550px] text-center md:text-start">
            Aumenta la productividad y mejora tu servicio con nuestros bots
            inteligentes. Automatiza tareas, optimiza recursos y alcanza
            resultados excepcionales. Descubre cómo nuestra tecnología
            innovadora potencia tu negocio y lo lleva al siguiente nivel.
          </p>
          <div className="flex flex-col md:flex-row w-full md:w-[50%] gap-x-3 gap-y-3 mt-16 justify-center md:justify-start">
            <button className="flex-1 text-lg bg-blue cursor-pointer text-white font-bold px-6 py-2 shadow-lg">
              Contactanos
            </button>
            <button className="flex-1  text-lg border-[0.5px] border-white/30 cursor-pointer text-white font-extrabold px-6 py-2 shadow-lg">
              Servicios
            </button>
          </div>
        </div>
        <div className="wrapper ">
          {/* <Image/> */}
          <video
            src="https://res.cloudinary.com/dnoeqtok8/video/upload/v1686005187/uhpp2eiegurrimn7sfyi.mp4"
            autoPlay
            loop
            muted
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
