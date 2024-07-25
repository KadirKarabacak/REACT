import { NextResponse } from "next/server";

export function middleware(request) {
    console.log(request);

    // This redirect makes a loop of requests
    return NextResponse.redirect(new URL("/about", request.url));
}

// To fix loop of redirects
export const config = {
    matcher: ["/account", "/cabins"],
};
