const NavigationDesktop = () => {
  return (
    <ul className="hidden md:flex flex-row items-center justify-end h-full text-white gap-x-8 cursor-pointer ">
      <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        <a>Home</a>
      </li>
      <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        <a>Servicios</a>
      </li>
      <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        <a>Sobre Nosotros</a>
      </li>
      <li className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        <a>Blog</a>
      </li>
      <button className="border transition-all hover:bg-white/10 font-medium border-white/20 px-4 py-1 rounded-full">
        <a className="">Contacto</a>
      </button>
    </ul>
  );
};

export default NavigationDesktop;
