import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Header, Sidebar } from "@/components"
import "./globals.css"

const fontSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Саженцы из Поповки",
  description: "Продажа деревьев и цветов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${fontSans.variable} antialiased max-w-[1420px] mx-auto`}
      >
        <Header />
        <div className="flex" >
          <div className="flex-1/4">
            {children}
          </div>
            
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
