import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(); // Ensure it's correctly called

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // Exclude static files
    "/api/(.*)", // Ensure API routes are covered
  ],
};
