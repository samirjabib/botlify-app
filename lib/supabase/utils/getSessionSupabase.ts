import { Session, SupabaseClient, User } from "@supabase/supabase-js";

export async function getProfileSupabase(
  supabase: SupabaseClient,
  slug: string | undefined = undefined
) {
  //check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  let match;

  if (slug !== undefined) {
    match = { slug };
  } else {
    match = { id: session?.user?.id };
  }

  //get the profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .match(match)
    .maybeSingle();

  return { profile, session };
}
