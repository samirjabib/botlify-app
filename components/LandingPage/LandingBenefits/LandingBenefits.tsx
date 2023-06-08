import { BadgeCheck } from "lucide-react";

const LandingBenefits = () => {
  return (
    <div className="bg-darkGray text-white wrapper">
      <div className="w-full flex flex-col items-center sm:flex-row py-24 border-2-border-red-500">
        <div className="w-full sm:w-[50%]">
          <h3 className=" font-semibold text-3xl mb-4 tracking-tighter max-w-lg ">
            Multiplica tu productividad y ahorra tiempo con nuestra solución de
            automatización
          </h3>
          <p className="text-white/80 text-base tracking-tighter mb-4  max-w-lg pr-4">
            Descubre cómo puedes mejorar la eficiencia y reducir la carga de
            trabajo manual mediante la automatización de tus procesos. Con la
            automatización, podrás:
          </p>
          <ul className="text-white/80 list-disc pl-4 text-base tracking-tighter flex flex-col gap-y-2 max-w-lg pr-4">
            <li>
              <span className="text-green-500 font-semibold">Aumenta</span> la
              productividad y eficiencia operativa al eliminar tareas
              repetitivas y tediosas.
            </li>
            <li>
              <span className="text-green-500 font-semibold">Optimiza</span> la
              asignación inteligente de recursos al identificar y eliminar
              ineficiencias en la distribución de tareas.
            </li>
            <li>
              <span className="text-green-500 font-semibold">Minimiza</span>{" "}
              errores y evita retrabajos innecesarios al implementar flujos de
              trabajo automatizados y controles de calidad.
            </li>
            <li>
              <span className="text-green-500 font-semibold">Gana</span> tiempo
              para centrarte en tareas estratégicas y de mayor valor que
              impulsen el crecimiento de tu negocio.
            </li>
            <li>
              <span className="text-green-500 font-semibold">Mejora</span> la
              precisión y consistencia de tus procesos al reducir la dependencia
              de acciones manuales propensas a errores.
            </li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="h-80 bg-yellow-500 w-96" />
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row py-24 ">
        <div className="w-1/2">
          <div className="h-80 bg-yellow-500 w-3/4" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col">
          <h3 className="text-start w-full font-semibold text-3xl mb-4 max-w-xl pr-2">
            Maximiza tus ventas y potencia tu negocio con la integración de tu
            bot en WhatsApp y tu landing page
          </h3>
          <p className="text-white/80 text-base max-w-xl pr-2 mb-4">
            Descubre cómo puedes mejorar la eficiencia y la interacción con tus
            clientes al integrar estratégicamente tu bot en WhatsApp y en tu
            Landing Page. Con nuestra solución de automatización, podrás:
          </p>
          <ul className="text-white/80  text-base tracking-tighter flex flex-col gap-y-2 max-w-xl pr-2">
            <div className="flex flex-row mr-2">
              <BadgeCheck className="w-8 h-8 mr-4 text-blue" />
              <li>
                Aprovecha la potencia y el alcance masivo de WhatsApp para
                captar y convertir más clientes.
              </li>
            </div>

            <div className="flex flex-row mr-2">
              <BadgeCheck className="w-8 h-8 mr-4 text-blue" />
              <li>
                Ofrece asistencia personalizada y resuelve consultas de forma
                automatizada mediante tu bot en WhatsApp.
              </li>
            </div>

            <div className="flex flex-row mr-2">
              <BadgeCheck className="w-8 h-8 mr-4 text-blue" />
              <li>
                Impulsa tu estrategia de marketing combinando WhatsApp y tu
                landing page para generar mayores conversiones.
              </li>
            </div>

            <div className="flex flex-row mr-2">
              <BadgeCheck className="w-8 h-8 mr-4 text-blue" />
              <li>
                Simplifica la comunicación y brinda una experiencia excepcional
                a tus clientes en un solo lugar.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingBenefits;
