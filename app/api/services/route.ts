import { createRouteHandlerSupabase } from "@/lib/supabase/supabase-client";
import { NextResponse } from "next/server";
import { Service } from "types/collections";
import { v4 as uuidv4 } from "uuid";

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

  //Check user is logged and is admin

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json(
      {
        message: "You are not logged",
        hint: "¿you must be login in your admin account for create services?",
      },
      { status: 401 }
    );
  }

  //insert service
  const { error, status, statusText } = await supabase
    .from("services")
    .insert({ ...service, id: uuidv4() });

  if (error) {
    return NextResponse.json(error, { status: 500 });
  }

  return NextResponse.json(
    { message: "service has be created" },
    { status: 201 }
  );
}
