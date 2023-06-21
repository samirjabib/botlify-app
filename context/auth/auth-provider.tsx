"use client";

import { useMutation } from "@tanstack/react-query";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

import { useSupabase } from "hooks/useSupabase";
import { AuthContext, AuthContextTypes } from "./auth-context";
import { useEffect } from "react";

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
    console.log("this run");
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", serverSession?.user?.id)
      .single();
    if (error) {
      console.log(error);
      return null;
    } else {
      user && console.log(user);
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(error);
  };

  const mutationKey = serverSession ? "profile-context" : null;
  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useMutation({
    mutationKey: [mutationKey],
    mutationFn: getUser,
  });

  console.log(user, ' this is the user')

  //sign out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
    router.push("/");
  };

  //refresh the page to sync server and client
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverSession?.access_token) {
        router.refresh;
      }
    });

    return subscription.unsubscribe();
  }, [router, supabase, serverSession?.access_token]);

  const valuesExposed: AuthContextTypes = {
    error,
    isLoading,
    signInWithGoogle,
    signOut,
    mutate,
    user,
  };

  return (
    <AuthContext.Provider value={valuesExposed}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
