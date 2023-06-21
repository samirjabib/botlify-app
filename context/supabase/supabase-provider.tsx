"use client";

import { createClientSupabase } from "@/lib/supabase/supabase-browser";
import { useState } from "react";
import SupabaseContext from "./supabase-context";

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createClientSupabase());

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      <>{children}</>
    </SupabaseContext.Provider>
  );
}
