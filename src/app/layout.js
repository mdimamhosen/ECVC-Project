import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./../Components/Navbar";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthProvider";
import { Providers } from "./../redux/providers/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ECVC Dashboard",
  description: "Education consultancy and Visa consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Providers>
            <Navbar />
            <Toaster />
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
