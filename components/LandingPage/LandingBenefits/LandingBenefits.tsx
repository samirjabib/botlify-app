const LandingBenefits = () => {
  return (
    <div className="bg-darkGray text-white wrapper">
      <div className="w-full flex flex-row py-24 border-2-border-red-500">
        <div className="w-[50%]">
          <h3>Ahorra tiempo y recursos</h3>
          <p>Automatiza tus procesos y reduce la carga de trabajo manual.</p>
          <ul>
            <li>Aumenta la eficiencia operativa.</li>
            <li>Optimiza la asignación de recursos.</li>
            <li>Minimiza errores y retrabajos.</li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="h-80 bg-yellow-500 w-96" />
        </div>
      </div>
      <div className="w-full flex flex-row py-24 border-2-border-red-500">
        <div className="w-[50%] ">
          <div className="h-80 bg-yellow-500 w-[70%] " />
        </div>
        <div className="w-[50%] flex flex-col ">
          <h3 className="text-start w-full">Ahorra tiempo y recursos</h3>
          <p>Automatiza tus procesos y reduce la carga de trabajo manual.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingBenefits;
