"use client";
import { FloatingInput } from "../../../design-system";
import { ContactSchema } from "../../../lib/validators/contact-form";
import { Textarea } from "../../ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactSchema>({
    mode: "onSubmit",
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = (data: ContactSchema) => {
    console.log(data);
  };

  return (
    <div className="col-span-1  w-full  flex justify-center">
      <form
        className="bg-gray shadow-2xl px-7 py-8 w-full max-w-lg "
        onSubmit={handleSubmit(onSubmit)}
      >
        <FloatingInput {...register("name")} />
        <FloatingInput {...register("email")} />
        <FloatingInput {...register("phone")} />

        <Textarea {...register("message")} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
