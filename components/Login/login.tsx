import { Dispatch, SetStateAction } from "react";

import LoginModalClient from "./login-modal-client";

interface Props {
  openModal: boolean | undefined;
  onCloseLink?: string;
  setCloseModal?: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ openModal, onCloseLink, setCloseModal }: Props) => {
  return (
    <>
      <LoginModalClient />
    </>
  );
};

export default Login;
