import { createRouteHandlerSupabase } from "@/lib/supabase/supabase-client";
import { NextResponse } from "next/server";
import { Service } from "types/collections";

export async function POST(request: Request) {
  const service: Service = await request.json();

  if (!service) {
    return NextResponse.json(
      {
        message: "Invalid service",
        hint: "¿may you forgot put the something?",
      },
      { status: 400 }
    );
  }

  //get supabase client
  const supabase = createRouteHandlerSupabase();

  //insert service
  const { data, error } = await supabase
    .from("services")
    .insert({ ...service });
  console.log(data);

  if (error) {
    return NextResponse.json(error, { status: 500 });
  }

  return NextResponse.json({ message: service }, { status: 201 });
}
