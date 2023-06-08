const LandingContact = () => {
  return (
    <div className="bg-darkGray w-full py-12">
      <div className="grid grid-cols-2 wrapper justify-center ">
        {/* text-box first row */}
        <div className="col-span-1 border-green-500 border-2">
          <button>Contactanos</button>
          <div>
            <h2>Llena tu informacion y nos pondremos en contacto contigo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              optio quia debitis? Ullam laborum dicta laudantium fugit
              asperiores, rem eveniet?
            </p>
          </div>

          <div></div>
        </div>
        {/* form second col */}
        <div className="col-span-1  w-full border-yellow-500 border-2">
          <form className="border-2 border-orange-500">
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
