// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { rateLimiter } from "@/lib/redis/rate-limiter";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "types/supabase";

const allowedOrigins =
  process.env.VERCEL_ENV === "production"
    ? ["https://yoururl.com"]
    : process.env.VERCEL_ENV === "preview"
    ? ["htpps://preview.yoururl.com"]
    : ["http://localhost:3000"];

const isAllowed = (origin: string) => allowedOrigins.includes(origin);

export default async function middleware(req: NextRequest) {
  /**
   * Any Server Component route that uses a Supabase client must be added to this
   * middleware's `matcher` array. Without this, the Server Component may try to make a
   * request to Supabase with an expired `access_token`.
   */
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const supabase = createMiddlewareClient<Database>({ req, res });
  const origin = req.headers.get("origin");

  await supabase.auth.getSession();

  // If it's an API Route, check the CORS origin
  if (origin && pathname.startsWith("/api") && !isAllowed(origin)) {
    return new NextResponse(null, { status: 401, statusText: "Unauthorized" });
  }

  return res;

  // //Rate limtier  for messages //TODO found how i can use multiples middlewares
  // const ip = req.ip ?? "127.0.0.1";
  // try {
  //   const { success } = await rateLimiter.limit(ip);

  //   if (!success) return new NextResponse("You are writing messages too fast.");
  //   return NextResponse.next();
  // } catch (error) {
  //   return new NextResponse(
  //     "Sorry, something went wrong processing your message. Please try again later."
  //   );
  // }
}

export const config = {
  //here config the path for match with the middleware
  // matcher: "/api/message/:path*",
};
