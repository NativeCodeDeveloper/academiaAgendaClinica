import { NextResponse } from "next/server";

const ALLOWED_PREFIXES = [
    "/dashboard",
    "/sign-in",
    "/sign-up",
    "/no-access",
    "/_next",
    "/api",
    "/favicon",
];

export function middleware(request) {
    const { pathname } = request.nextUrl;

    const isAllowed = ALLOWED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

    if (!isAllowed) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|ttf|woff|woff2)).*)"],
};
