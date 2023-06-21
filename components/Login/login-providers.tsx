import { useSupabase } from "hooks/useSupabase";
import { FcGoogle } from "react-icons/fc";

const LoginProviders = () => {
  const { supabase } = useSupabase();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.log(error);
  };

  return (
    <div>
      <div className=" bg-darkGray py-2 rounded-full max-w-sm">
        <button
          className="text-white flex  w-full justify-center px-4  gap-x-2 font-bold "
          onClick={handleLogin}
        >
          <p> Continuar con google</p>
          <FcGoogle size={22} />
        </button>
      </div>
    </div>
  );
};

export default LoginProviders;
