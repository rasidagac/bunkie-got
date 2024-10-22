import type { ClerkMiddlewareAuth } from "@clerk/nextjs/server";

import { getUserById } from "@actions/user";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
  "/(.*).(svg|ico|png|jpg|gif)",
]);

const isHome = createRouteMatcher(["/", "/home"]);

async function homeMiddleware(auth: ClerkMiddlewareAuth, req: NextRequest) {
  const userId = auth().userId;
  if (userId && isHome(req)) {
    const user = await getUserById(userId);

    if (user) {
      if (user.homeId) {
        return NextResponse.redirect(new URL(`/home/${user.homeId}`, req.url));
      }

      const response = NextResponse.next();
      response.headers.set("user-name", user.name);

      return response;
    }

    return NextResponse.next();
  }
}

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();

  return homeMiddleware(auth, req);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
