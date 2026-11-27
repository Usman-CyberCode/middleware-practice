
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {

    const pathname = request.nextUrl.pathname;
    if (pathname === "/dashboard") {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }
    return NextResponse.next();
}
