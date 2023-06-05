const Header = () => {
  return (
    <div className="h-20 w-full fixed top-0 left-0 ">
      <div className="wrapper  flex justify-between h-full items-center">
        <div className="flex flex-row items-center gap-x-2 font-extrabold">
          <span className="text-white border-2 border-white">Logo</span>
          <h2 className="text-white">
            Chat
            <span className="text-blue">Bot</span>
          </h2>
        </div>

        <nav className="">
          <ul className="flex flex-row items-center justify-center h-full gap-x-6 text-white ">
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
              <a>Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
