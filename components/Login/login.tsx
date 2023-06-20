import { Dispatch, SetStateAction } from "react";

import LoginModalClient from "./login-modal-client";

const Login = () => {
  

  return (
    <>
      <LoginModalClient open={open} setOpen={setOpen} />
    </>
  );
};

export default Login;
