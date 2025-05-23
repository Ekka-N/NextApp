import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import { Header, Sidebar } from "@/components"

import "./globals.css"

const fontSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Саженцы из Поповки",
  description: "Продажа деревьев и цветов",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body
        className={`flex flex-col ${fontSans.variable} antialiased max-w-[1420px] mx-auto px-3 sm:flex-col`}
      >
        <Header />
        <div className="flex h-full gap-10" >
          <div className="flex flex-11/12">
            {children}
          </div>
          <div className="hidden flex-2/12 h-[70vh] lg:block">
            <Sidebar />
          </div>
        </div>
        <footer className="">
        </footer>
      </body>
    </html>
  )
}
