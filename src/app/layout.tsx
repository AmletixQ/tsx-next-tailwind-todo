import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo | Next + TailwindCSS + TypeScript",
  description: "App for your todo actions...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={
          (montserrat.className,
          "w-screen min-h-screen flex justify-center overflow-x-hidden")
        }
      >
        <div className="w-[800px] flex flex-col justify-between">
          <Providers>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
