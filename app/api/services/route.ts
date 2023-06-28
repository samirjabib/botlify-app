import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { Service } from "types/collections";
import { createRouteHandlerSupabase } from "@/lib/supabase/supabase-server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
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
  // Get Supabase Client
  const supabase = createRouteHandlerClient({ cookies }); //this have a problmen because next13 don't have cookies in fetch

  // Check User is logged in
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (!session) {
  //   return NextResponse.json(
  //     {
  //       message: "You are not logged",
  //       hint: "¿you must be login in your admin account for create services?",
  //     },
  //     { status: 401 }
  //   );
  // }

  const { error, status, statusText } = await supabase
    .from("services")
    .insert({ ...service, id: uuidv4() });

  console.log(error);

  if (error) {
    return NextResponse.json(error, { status: 500 });
  }

  return NextResponse.json({ message: "created" }, { status: 201 });
}

// export async function GET(request: Request) {
//   //create supabase client

//   const supabase = createRouteHandlerSupabase();

//   //get all services
//   const { data: services, error } = await supabase.from("services").select("*");

//   if (error) {
//     return NextResponse.json(error, { status: 500 });
//   }

//   return new NextResponse(JSON.stringify(services), {
//     status: 200,
//     headers: {
//       "content-type": "application/json",
//       "Access-Control-Allow-Origin": origin || "*",
//     },
//   });
// }
