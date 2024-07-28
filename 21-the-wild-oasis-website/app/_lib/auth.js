import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// AuthConfig oluşturup içerisinde providers dizisini veriyoruz ve provider'larımızı env variable'larımızla dolduruyoruz.
const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    // We need to spesify callbacks to handle user authorized or not
    callbacks: {
        // auth: Current session, request: request object
        authorized({ auth, request }) {
            // This trick returns a value to a boolean
            return !!auth?.user;
        },
    },
    // Redirect user to our own login page instead of prebuilt google login
    pages: { signIn: "/login" },
};

// Sonrasında NextAuth fonksiyonumuzu çağırıp içerisini config objemizi veriyoruz
export const {
    auth,
    handlers: { GET, POST },
    signIn,
    signOut,
} = NextAuth(authConfig);
