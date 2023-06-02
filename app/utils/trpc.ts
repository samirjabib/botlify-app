import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../server/api/trpc/trpc-router";

export const trpc = createTRPCReact<AppRouter>();