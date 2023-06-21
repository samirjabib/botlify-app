import useAuth from "hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const LoginProviders = () => {
  const { signInWithGoogle, user } = useAuth();

  return (
    <div>
      <div className=" bg-darkGray py-2 rounded-full max-w-sm">
        <button
          className="text-white flex  w-full justify-center px-4  gap-x-2 font-bold "
          onClick={signInWithGoogle}
        >
          <p> Continuar con google</p>
          <FcGoogle size={22} />
        </button>
      </div>
    </div>
  );
};

export default LoginProviders;
