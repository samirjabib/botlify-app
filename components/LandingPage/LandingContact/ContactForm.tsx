import { FloatingInput } from "../../../design-system";

const ContactForm = () => {
  return (
    <div className="col-span-1  w-full  flex justify-center">
      <form className="bg-gray shadow-2xl px-7 py-8 w-full max-w-lg ">
        <FloatingInput />
        <FloatingInput />
        <FloatingInput />
        {/* <Textarea /> */}
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
