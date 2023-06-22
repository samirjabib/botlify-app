import { Profile } from "types/collections";
import { createContext } from "react";

export interface AuthContextTypes {
  user: Profile | null | undefined;
  error?: unknown;
  isLoading?: boolean;
  mutate?: any;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextTypes>({
  user: null,
  error: null,
  isLoading: false,
  mutate: null,
  signOut: async () => {},
  signInWithGoogle: async () => {},
});
