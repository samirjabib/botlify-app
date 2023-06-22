"use client";

import { useQuery } from "@tanstack/react-query";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

import { useSupabase } from "hooks/useSupabase";
import { AuthContext, AuthContextTypes } from "./auth-context";
import { useEffect, useState } from "react";
import { Profile } from "types/collections";
import useSWR from "swr";

const AuthProvider = ({
  children,
  serverSession,
}: {
  children: React.ReactNode;
  serverSession: Session | null;
}) => {
  // const [session, setSession] = useState<Session | null>(null);
  // const [user, setUser] = useState<Profile | null>(null);

  const { supabase } = useSupabase();
  const router = useRouter();

  // Get USER
  const getUser = async () => {
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", serverSession?.user?.id)
      .single();
    if (error) {
      console.log(error);
      return null;
    } else {
      return user;
    }
  };

  const key = serverSession ? "profile-context" : null;

  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: [key],
    queryFn: getUser,
  });

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    console.log(error);
  };

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
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase, serverSession?.access_token]);

  const valuesExposed: AuthContextTypes = {
    signInWithGoogle,
    signOut,
    user,
    error,
    isLoading,
  };

  return (
    <AuthContext.Provider value={valuesExposed}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
