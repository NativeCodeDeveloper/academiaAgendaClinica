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

    // La raiz es la portada de bienvenida. Se compara exacta y no por prefijo:
    // "/" es prefijo de todo, asi que en ALLOWED_PREFIXES habria dejado pasar
    // cualquier ruta.
    if (pathname === "/") return NextResponse.next();

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
