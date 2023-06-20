import { Mail } from "lucide-react";

const FooterNewletters = () => {
  return (
    <div className="flex flex-row bg-darkGray items-center  rounded-l-md shadow-lg">
      <div className="px-4 rounded-l-md">
        <Mail size={24} color="#FFFFFF99" />
      </div>

      <input
        placeholder="Tu email"
        className="bg-transparent py-2 text-white text-sm tracking-tighter"
      />
      <div></div>
      <button className="bg-blue text-white font-bold px-4 py-2 rounded-r-md">
        Suscribirse
      </button>
    </div>
  );
};

export default FooterNewletters;
