const LandingBenefits = () => {
  return (
    <div className="bg-darkGray text-white wrapper">
      <div className="w-full flex flex-col items-center sm:flex-row py-24 border-2-border-red-500">
        <div className="w-full sm:w-[50%]">
          <h3 className=" font-semibold text-2xl mb-4 tracking-tighter">
            Optimiza tus operaciones y ahorra tiempo
          </h3>
          <p className="text-white/80 text-base tracking-tighter mb-4  max-w-lg pr-5">
            Descubre cómo puedes mejorar la eficiencia y reducir la carga de
            trabajo manual mediante la automatización de tus procesos. Con la
            automatización, podrás:
          </p>
          <ul className="text-white/80 list-disc pl-4 text-base tracking-tighter flex flex-col gap-y-2 max-w-lg pr-5">
            <li>
              <span className="text-blue">Aumenta</span> la productividad y
              eficiencia operativa al eliminar tareas repetitivas y tediosas.
            </li>
            <li>
              <span className="text-blue">Optimiza</span> la asignación
              inteligente de recursos al identificar y eliminar ineficiencias en
              la distribución de tareas.
            </li>
            <li>
              <span className="text-blue">Minimiza</span> errores y evita
              retrabajos innecesarios al implementar flujos de trabajo
              automatizados y controles de calidad.
            </li>
            <li>
              <span className="text-blue">Gana</span> tiempo para centrarte en
              tareas estratégicas y de mayor valor que impulsen el crecimiento
              de tu negocio.
            </li>
            <li>
              <span className="text-blue">Mejora</span> la precisión y
              consistencia de tus procesos al reducir la dependencia de acciones
              manuales propensas a errores.
            </li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="h-80 bg-yellow-500 w-96" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center sm:flex-row py-24 border-2-border-red-500">
        <div className="w-[50%] ">
          <div className="h-80 bg-yellow-500 w-[70%] " />
        </div>
        <div className=" w-full sm:w-[50%] flex flex-col ">
          <h3 className="text-start w-full">Ahorra tiempo y recursos</h3>
          <p>Automatiza tus procesos y reduce la carga de trabajo manual.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingBenefits;
