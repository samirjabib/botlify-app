import { Mail } from "lucide-react";

const FooterNewletters = () => {
  return (
    <div>
      <input placeholder="Tu email"></input>
      <div>
        <Mail size={16} />
      </div>
      <button>Suscribirse</button>
    </div>
  );
};

export default FooterNewletters;
