const LandingServices = () => {
  return (
    <div className="w-full  py-12  bg-gray">
      <h2 className="text-white text-4xl text-center font-bold mb-12 mx-auto max-w-3xl">
        Nuestros Descubre Nuestros Servicios de Automatización
      </h2>
      <div className="flex flex-row w-full wrapper gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="w-full border-2 bg-yellow-500 h-80">
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingServices;
