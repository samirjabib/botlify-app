import { Session } from "@supabase/supabase-js";
import { AuthContext } from "./auth-context";

const AuthProvider = ({
  children,
  serverSession,
}: {
  children: React.ReactNode;
  serverSession: Session | null;
}) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
