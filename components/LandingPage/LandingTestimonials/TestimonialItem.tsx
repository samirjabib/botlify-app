const TestimonialItem = () => {
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <p className="text-white text-center mb-4 max-w-3xl ">
        "Compré un bot para mi tienda de comercio electrónico y ha sido un
        cambio radical. El bot ha mejorado considerablemente la interacción con
        los clientes y ha impulsado las ventas. Es una herramienta poderosa que
        automatiza diversas tareas y brinda soporte personalizado a los
        compradores. Lo recomiendo ampliamente a cualquiera que busque mejorar
        su negocio de comercio electrónico."
      </p>
      <div className="flex flex-row gap-x-2   justify-center items-center">
        <div className="h-8 w-8 bg-yellow-500 rounded-full" />
        <h3 className="text-white/80">Samir Jabib</h3>
        <div className="h-3  border border-white/60" />
        <p className=" text-white/60 text-sm">Propietario de E-commerce</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
