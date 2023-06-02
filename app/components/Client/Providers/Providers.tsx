"use client";

import { FC } from "react";
import { TrpcProvider } from "../../../utils/trpc-provider";
import Chat from "../Chat/Chat";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <TrpcProvider>
      {children}
      <Chat />
    </TrpcProvider>
  );
};

export default Providers;
