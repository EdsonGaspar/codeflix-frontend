"use client";
import { Bell, Menu, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export function Header() {
  const [isScroled, setIsScroled] = useState(false);

  useEffect(() => {
    const handScrolell = () => {
      setIsScroled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handScrolell);
    return () => window.removeEventListener("scroll", handScrolell);
  });

  return (
    <div
      className={`fixed top-0 left-0 flex h-20 w-full items-center ${
        isScroled ? "bg-accent-foreground shadow" : "bg-transparent"
      }`}
    >
      <header className="container mx-auto flex h-full items-center justify-between px-3 transition-all duration-300 md:px-5">
        <aside className="flex items-end justify-between md:justify-start md:gap-7">
          <h1 className="font-bold text-primary text-xl uppercase md:text-2xl lg:text-4xl">
            <Link href={"/"}>codeflix</Link>
          </h1>

          <div className="hidden md:block">
            <ul className="flex gap-3 font-semibold text-lg">
              <li className=" transition-all duration-300 hover:text-primary hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="transition-all duration-300 hover:text-primary hover:underline">
                <Link href={"/tv-shows"}>TV Shows</Link>
              </li>
              <li className="transition-all duration-300 hover:text-primary hover:underline">
                <Link href={"/movies"}>Movies</Link>
              </li>
              <li className="transition-all duration-300 hover:text-primary hover:underline">
                <Link href={"/new-and-popular"}>New & Popular</Link>
              </li>
            </ul>
          </div>
        </aside>
        <aside className="flex items-center gap-4">
          <div className="flex space-x-1.5">
            <Search className="cursor-pointer hover:text-primary" />

            <Bell className="cursor-not-allowed" />
          </div>
          <div className="flex cursor-pointer md:hidden">
            <Sheet>
              <SheetTrigger>
                {" "}
                <Menu className="size-9 cursor-pointer hover:text-primary" />{" "}
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </aside>
      </header>
    </div>
  );
}
