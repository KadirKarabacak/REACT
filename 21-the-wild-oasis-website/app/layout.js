import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

// Page title witch shown on new browser tab
export const metadata = {
    title: "The Wild Oasis",
    description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
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
