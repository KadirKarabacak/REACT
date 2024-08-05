//! Server actions must be created in "use server" directive. It's like a bridge from going to the client back to the server
"use server";

//! We must use our own signIn function which we take and export from NextAuth
import { auth, signIn, signOut } from "./auth";

const nationalIDRegex = /^[a-zA-Z0-9]{6,12}$/;

// Form data comes from form submit, includes our input data
export async function updateGuest(formData) {
    // In server actions, we must throw errors instead of using TRY - CATCH block
    const session = await auth();
    if (!session) throw new Error("You must be logged in");
    if (!nationalIDRegex) throw new Error("Please provide a valid national ID");

    const nationalID = formData.get("nationalID");
    const [nationality, countryFlag] = formData.get("nationality").split("%");
}

export async function signInAction() {
    // First is Provider, Second is redirected route after login. If we use more than one provider we must loop over /api/auth/providers
    await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}
