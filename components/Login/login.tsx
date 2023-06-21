import LoginModalClient from "./login-modal-client";
import { useLoginStore } from "./store/login-store";

const Login = () => {
  const { openModalLogin, setModalLogin } = useLoginStore();

  return (
    <>
      <LoginModalClient open={openModalLogin} setOpen={setModalLogin} />
    </>
  );
};

export default Login;
