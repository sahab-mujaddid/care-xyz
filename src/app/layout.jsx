import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { SessionProvider } from "next-auth/react";
import NextAuthProvider from "@/Provider/NextAuthProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care",
  description: "Baby Sitting & Elderly Care Service Platform",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>

       
          <main className="py-2 md:w-11/12 mx-auto">{children}</main>
       

        <footer className="py-2 md:w-11/12 mx-auto">
          <Footer />
        </footer>
      </body>
    </html>
    </NextAuthProvider>
  );
}