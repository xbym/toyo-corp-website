import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "东阳株式会社",
  description: "专业的日本语言学习和留学服务提供商",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}