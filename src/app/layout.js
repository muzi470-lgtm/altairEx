import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata = {
  title: "Muzammil Studio",
  description: "Elite Digital Agency",
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.className}>
      <body className="antialiased bg-aesthetic-bg text-aesthetic-text min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}