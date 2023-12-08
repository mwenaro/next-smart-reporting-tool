import { GlobalContextProvider } from "@/context/GlobalContext";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { InputForm } from "@/components/molecules/InputForm";
import { signupFormFields } from "../contants";

export const metadata: Metadata = {
  title: "NavTelema",
  description: "NavTelema Official Website",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex justify-center items-center max-w-7xl mx-auto",
          fontSans.variable || ""
        )}
      >
        <GlobalContextProvider>
          {children}

          {/* <InputForm formFields={signupFormFields || []} /> */}
          <Toaster />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
