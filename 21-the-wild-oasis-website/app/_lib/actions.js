//! Server actions must be created in "use server" directive. It's like a bridge from going to the client back to the server
//! We must use our own signIn function which we take and export from NextAuth
"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";

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

export async function deleteReservation(bookingId) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    // Any user can delete other bookings using any of our requests in network tab with copying request as cURL
    // https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/43783896#questions   14:00
    //! To fix that problem up there ->>
    // const guestBookings = await getBookings(bookingId);
    // const guestBookingIds = guestBookings.map(booking => booking.id);
    // if (!guestBookingIds.includes(bookingId))
    //     throw new Error("You are not allowed to delete this booking.");

    const { error } = await supabase
        .from("bookings")
        .delete()
        .eq("id", bookingId);

    if (error) throw new Error("Booking could not be deleted");

    // After the mutation done, revalidatePath to re-render route
    revalidatePath("/account/reservations");
}

export async function signInAction() {
    // First is Provider, Second is redirected route after login. If we use more than one provider we must loop over /api/auth/providers
    await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}
