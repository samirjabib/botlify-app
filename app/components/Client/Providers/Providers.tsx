"use client";

import { FC } from "react";
import { TrpcProvider } from "../../../utils/trpc-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <TrpcProvider>{children}</TrpcProvider>;
};

export default Providers;
