import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, AppWrapper } from "@/app/exports";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asaad Hayani",
  description: "This is a portfolio website for Asaad Hayani.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image" href="/my.png" />
      </head>
      <body
        cz-shortcut-listen="true"
        className="selection:bg-[#941600] selection:text-white bg-slate-100 dark:bg-slate-900"
      >
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
