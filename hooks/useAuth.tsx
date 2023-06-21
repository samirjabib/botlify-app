import { AuthContext } from "context/auth/auth-context";
import { useContext } from "react";

const useAuth = () => {
  let context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a SupabaseAuthProvider");
  } else {
    return context;
  }
};

export default useAuth;
