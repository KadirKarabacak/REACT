//! Server actions must be created in "use server" directive.
"use server";

//! We must use our own signIn function which we take and export from NextAuth
import { signIn, signOut } from "./auth";

export async function signInAction() {
    // First is Provider, Second is redirected route after login. If we use more than one provider we must loop over /api/auth/providers
    await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}
