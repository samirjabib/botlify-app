"use client";

import { Session } from "@supabase/supabase-js";
import { useSupabase } from "hooks/useSupabase";
import { useRouter } from "next/navigation";
import { AuthContext } from "./auth-context";

const AuthProvider = ({
  children,
  serverSession,
}: {
  children: React.ReactNode;
  serverSession: Session | null;
}) => {
  const { supabase } = useSupabase();
  const router = useRouter();

  const getUser = async () => {
    const {} = await supabase
      .from("profiles")
      .select("*")
      .eq("id", serverSession?.user?.id)
      .single();
  };

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
