import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./common/layouts/Footer";
import Header from "./common/layouts/Header";
import ContactUs from "@/app/Contact/components/ContactUs";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Force Engenring",
  description: "Your Key to Successful Trading",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Toaster position="top-center" theme="dark" richColors />{" "}
          <div className="w-full   min-h-screen">
            <Header />
            {children}
            <ContactUs />
            <Footer />
          </div>
       
      </body>
    </html>
  );
}
