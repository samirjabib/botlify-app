const LandingContact = () => {
  return (
    <div className="bg-darkGray w-full py-12">
      <div className="grid grid-cols-2 wrapper justify-center space-x-12">
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
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
