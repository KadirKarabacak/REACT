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
};

// Sonrasında NextAuth fonksiyonumuzu çağırıp içerisini config objemizi veriyoruz
export const {
    auth,
    handlers: { GET, POST },
} = NextAuth(authConfig);
