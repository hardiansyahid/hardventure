import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hardventure Studio — Where Curiosity Becomes Creation",
  description:
    "Hardventure Studio is an independent product studio creating thoughtful software, mobile apps, and indie games.",
  applicationName: "Hardventure Studio",
  openGraph: {
    title: "Hardventure Studio — Where Curiosity Becomes Creation",
    description:
      "An independent product studio exploring ideas through software, apps, and indie games.",
    type: "website",
  },
};

const THEME_SCRIPT = `(function(){var e=document.documentElement;function s(t){e.classList.toggle("dark", t==="dark")}var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){s(t)}else{s(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
