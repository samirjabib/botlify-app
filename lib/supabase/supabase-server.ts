import {
  createServerComponentClient,
  createRouteHandlerClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// This needs to export a function, as the headers and cookies are not populated with values until the Server Component is requesting data.

// We will use this client in Server Components
export const createServerSupabase = () => {
  return createServerComponentClient({ cookies });
};

// We will use this client in Route Handlers
export const createRouteHandlerSupabase = () => {
  return createRouteHandlerClient({ cookies });
};
