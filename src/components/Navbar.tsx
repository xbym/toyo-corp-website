"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, MountainIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务" },
  { href: "/language-schools", label: "语言学校" },
  { href: "/private-school", label: "私塾" },
  { href: "/sgu-study", label: "SGU学校" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
  { href: "/admin/homepage", label: "后台管理" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <MountainIcon className="h-6 w-6 mr-2" />
            <span className="font-bold text-lg">东阳株式会社</span>
          </Link>
          <nav className="hidden md:flex space-x-6 items-center ml-auto mr-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium hover:text-primary-foreground/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}