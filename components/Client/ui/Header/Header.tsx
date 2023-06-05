const Header = () => {
  return (
    <div className="h-20 w-full fixed top-0 left-0 ">
      <div className="wrapper  flex justify-between h-full items-center">
        <div className="flex flex-row items-center gap-x-2">
          <span className="text-white border-2 border-white">Logo</span>
          <h2 className="text-white">ChatBot</h2>
        </div>

        <nav className="">
          <ul className="flex flex-row gap-x-4">
            <li className="text-white/80 text-base cursor-pointer">
              Sobre Nosotros
            </li>
            <li className="text-white/80 text-base cursor-pointer">
              Servicios
            </li>
            <li className="text-white/80 text-base cursor-pointer">Contacto</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
