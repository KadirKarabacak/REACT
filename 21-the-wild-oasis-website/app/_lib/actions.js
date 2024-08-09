//! Server actions must be created in "use server" directive. It's like a bridge from going to the client back to the server
//! We must use our own signIn function which we take and export from NextAuth
//! No way to get params on URL in Server Actions
"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

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
    //! To fix that problem
    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings?.map(booking => booking.id);
    if (!guestBookingIds.includes(bookingId))
        throw new Error("You are not allowed to delete this booking.");

    const { error } = await supabase
        .from("bookings")
        .delete()
        .eq("id", bookingId);

    if (error) throw new Error("Booking could not be deleted");

    // After the mutation done, revalidatePath to re-render route
    revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
    // 1) Authentication
    const session = await auth();
    if (!session)
        throw new Error("You must be logged in to update reservation");

    // 3) Building update data
    const bookingId = Number(formData.get("bookingId"));
    const observations = formData.get("observations").slice(0, 1000);
    const numGuests = Number(formData.get("numGuests"));
    const updatedFields = { observations, numGuests };

    // 2) Authorization
    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings?.map(booking => booking.id);
    if (!guestBookingIds.includes(bookingId))
        throw new Error("You are not allowed to delete this booking.");

    // 4) Mutation
    const { error } = await supabase
        .from("bookings")
        .update(updatedFields)
        .eq("id", bookingId);

    // 5) Error handling
    if (error) throw new Error("Booking could not be updated");

    // 6) Revalidating
    revalidatePath(`/account/reservations/edit/${bookingId}`);
    revalidatePath("/account/reservations");

    // 7) Redirecting
    redirect("/account/reservations");
}

export async function signInAction() {
    // First is Provider, Second is redirected route after login. If we use more than one provider we must loop over /api/auth/providers
    await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}
