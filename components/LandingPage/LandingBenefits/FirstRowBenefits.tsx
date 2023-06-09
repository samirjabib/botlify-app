const FirstRowBenefits = () => {
  return (
    <div className="w-full flex flex-col items-center sm:flex-row py-24 border-2-border-red-500">
      <div className="w-full sm:w-[50%]">
        <p className="text-white/60 text-sm text-start font-bold  mx-auto uppercase mb-2">
          Obten estos beneficios
        </p>
        <h3 className=" font-semibold text-3xl mb-4 tracking-tighter max-w-xl pr-4">
          Multiplica tu productividad y ahorra tiempo con nuestra solución de
          automatización
        </h3>
        <p className="text-white/80 text-base tracking-tighter mb-4  max-w-xl pr-8  ">
          Descubre cómo puedes mejorar la eficiencia y reducir la carga de
          trabajo manual mediante la automatización de tus procesos. Con la
          automatización, podrás:
        </p>
        <ul className="text-white/80 list-disc pl-4 text-base tracking-tighter flex flex-col gap-y-2 max-w-xl pr-12">
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Aumenta
            </span>{" "}
            la productividad y eficiencia operativa al eliminar tareas
            repetitivas y tediosas.
          </li>
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Optimiza
            </span>{" "}
            la asignación inteligente de recursos al identificar y eliminar
            ineficiencias en la distribución de tareas.
          </li>
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Minimiza
            </span>{" "}
            errores y evita retrabajos innecesarios al implementar flujos de
            trabajo automatizados y controles de calidad.
          </li>
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Gana
            </span>{" "}
            tiempo para centrarte en tareas estratégicas y de mayor valor que
            impulsen el crecimiento de tu negocio.
          </li>
          <li>
            <span className="text-green-500 font-semibold uppercase text-lg">
              Mejora
            </span>{" "}
            la precisión y consistencia de tus procesos al reducir la
            dependencia de acciones manuales propensas a errores.
          </li>
        </ul>
      </div>
      <div className="w-1/2 ">
        <div className="h-80 bg-yellow-500 w-3/4 rounded-md shadow-lg" />
      </div>
    </div>
  );
};

export default FirstRowBenefits;
