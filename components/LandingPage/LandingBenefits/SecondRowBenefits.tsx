import { BadgeCheck } from "lucide-react";

const SecondRowBenefits = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row py-24 ">
      <div className="w-1/2">
        <div className="h-80 bg-yellow-500 w-3/4" />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col">
        <h3 className="text-start w-full font-semibold text-3xl mb-4 max-w-xl pr-2">
          Maximiza tus ventas y potencia tu negocio con la integración de tu bot
          en WhatsApp y tu landing page
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
              Aprovecha la potencia y el alcance masivo de WhatsApp para captar
              y convertir más clientes.
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
              Simplifica la comunicación y brinda una experiencia excepcional a
              tus clientes en un solo lugar.
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SecondRowBenefits;
