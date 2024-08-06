//! Server actions must be created in "use server" directive. It's like a bridge from going to the client back to the server
"use server";

import { revalidatePath } from "next/cache";
//! We must use our own signIn function which we take and export from NextAuth
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

const nationalIDRegex = /^[a-zA-Z0-9]{6,12}$/;

// Form data comes from form submit, includes our input data. After the guest updated, browser cache holding stale data.
export async function updateGuest(formData) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");
    // In server actions, we must throw errors instead of using TRY - CATCH block
    const [nationality, countryFlag] = formData.get("nationality").split("%");
    const nationalID = formData.get("nationalID");

    if (!nationalIDRegex.test(nationalID))
        throw new Error("Please provide a valid national ID");

    const updateData = { nationalID, nationality, countryFlag };

    const { error } = await supabase
        .from("guests")
        .update(updateData)
        .eq("id", session.user.guestId);

    if (error) throw new Error("Guest could not be updated");

    // After the mutation done, revalidatePath to re-render route
    revalidatePath("/account/profile");
}

export async function signInAction() {
    // First is Provider, Second is redirected route after login. If we use more than one provider we must loop over /api/auth/providers
    await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}
