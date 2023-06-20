import { FcGoogle } from "react-icons/fc";

const LoginProviders = () => {
  return (
    <div>
      <div className="bg-darkGray py-2 rounded-full">
        <button className="text-white flex  w-full justify-center px-4  gap-x-2">
          <p> Continuar con google</p>
          <FcGoogle size={20} />
        </button>
      </div>
    </div>
  );
};

export default LoginProviders;
