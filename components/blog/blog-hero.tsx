import { Button } from "@/design-system/elements/button/Button";
import { Title } from "@/design-system/index";
import Image from "next/image";

const BlogHero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray max-w-7xl shadow-lg rounded-2xl">
      <div className=" w-1/2  py-16 px-12">
        <Title as="h2" size={"sectionTitle"} className="text-white  ">
          This is a featured article - the most important piece of content
        </Title>
        <p className="text text-white/80 mb-4 ">
          Tu fuente de conocimientos sobre bots. Explora nuestro Blog de Botlify
          para obtener consejos y novedades sobre el uso de bots en diversas
          industrias. Maximiza la automatización y mantente actualizado en este
          fascinante campo.
        </p>
        <Button intent="primary">Leer Ahora</Button>
      </div>
      <div className="w-1/2 relative ">
        <Image
          fill
          className="h-48 w-full object-cover object-center p-2 rounded-2xl shadow-md"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="blog hero"
        />
      </div>
    </div>
  );
};

export default BlogHero;
