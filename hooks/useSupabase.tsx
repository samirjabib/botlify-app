import SupabaseContext from "context/supabase/supabase-context";
import { useContext } from "react";

export const useSupabase = () => {
  let context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  } else {
    return context;
  }
};
