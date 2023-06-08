const LandingServices = () => {
  return (
    <div className="w-full  pt-12 pb-20  bg-gray">
      <p className="text-white/60 text-sm text-center font-bold  mx-auto uppercase mb-2">
        Explora Nuestros Servicios
      </p>
      <h2 className="text-white text-4xl text-center font-bold mb-12 mx-auto max-w-3xl">
        Descubre Nuestros Servicios Innovadores{" "}
      </h2>
      <div className="flex flex-col md:flex-row w-full wrapper gap-4">
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
