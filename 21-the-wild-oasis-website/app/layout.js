import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

// Page title witch shown on new browser tab
export const metadata = {
    // title: "The Wild Oasis",
    title: {
        template: "The Wild Oasis | %s", // %s is the dynamic title comes from each page metadata
        default: "Welcome | The Wild Oasis", // default title if there is no metadata
    },
    description:
        "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-primary-950 text-primary-100 min-h-screen">
                <header>
                    <Logo />
                </header>
                <Navigation />
                <main>{children}</main>
                <footer>Copyright by The Wild Oasis</footer>
            </body>
        </html>
    );
}
