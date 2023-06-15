"use client";

import { createContext } from "react";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../types/supabase";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

const SupabaseContext = createContext<SupabaseContext | undefined>(undefined);

export default SupabaseContext;