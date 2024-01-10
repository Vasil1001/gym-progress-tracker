"use client"

import React from "react"
import Container from "./ui/container"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react"
import ProfileButton from "./ui/ProfileButton"
import { useTheme } from "next-themes"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

type Props = {}

const Header = () => {
  const { theme, setTheme } = useTheme()

  const routes = [
    {
      href: "/",
      label: "Products",
    },
    {
      href: "/",
      label: "Categories",
    },
    {
      href: "/",
      label: "On Sale",
    },
  ]
  return (
    <header className="sm:flex sm:justify-between py-2 mb-5 border-b">
      <Container>
        <div className="relative flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link href={route.href} key={i}>
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/">
              <h1 className="text-xl font-bold">STORE NAME</h1>
            </Link>
          </div>

          <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              // eslint-disable-next-line react/jsx-key
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header