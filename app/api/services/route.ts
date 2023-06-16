import { createRouteHandlerSupabase } from "@/lib/supabase/supabase-client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { service } = await request.json();

  if (!service || typeof service !== "object") {
    return NextResponse.json(
      { message: "Invalid service", hint: "¿may you forgot put the service?" },
      { status: 400 }
    );
  }

  //get supabase client

  const supabase = createRouteHandlerSupabase();

  //insert service
  const { data, error } = await supabase.from("services").insert({ service });

  if (error) {
    return NextResponse.json(error, { status: 500 });
  }

  return NextResponse.json({ message: "service is created!" }, { status: 201 });
}
