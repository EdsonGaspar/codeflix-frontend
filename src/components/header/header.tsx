"use client";
import { Bell, Menu, Search } from "lucide-react";
import Link from "next/link";
import { UseScroll } from "../../hooks/useScroll";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const NavLinks = () => {
  return (
    <nav className="hidden md:block">
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
    </nav>
  );
};

const UserProfile = () => {
  return (
    <div className="flex space-x-1.5">
      <Search className="cursor-pointer hover:text-primary" />

      <Bell className="cursor-not-allowed" />
    </div>
  );
};

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <Menu className="size-9 cursor-pointer hover:text-primary" />{" "}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <ul className="mt-3 flex flex-col gap-2 font-semibold">
              <li className=" cursor-pointer transition-all duration-300 hover:text-primary hover:underline">
                <Link className="w-full" href="/">
                  Home
                </Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer hover:text-primary hover:underline">
                <Link href={"/tv-shows"}>TV Shows</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer hover:text-primary hover:underline">
                <Link href={"/movies"}>Movies</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer hover:text-primary hover:underline">
                <Link href={"/new-and-popular"}>New & Popular</Link>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export function Header() {
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-20 w-full items-center ${
        UseScroll() ? "bg-accent-foreground shadow" : "bg-transparent"
      }`}
    >
      <header className="container mx-auto flex h-full items-center justify-between px-5 transition-all duration-300 md:px-8">
        <aside className="flex items-end justify-between md:justify-start md:gap-7">
          <h1 className="font-bold text-primary text-xl uppercase md:text-2xl lg:text-4xl">
            <Link href={"/"}>codeflix</Link>
          </h1>
          <NavLinks />
        </aside>
        <aside className="flex items-center gap-4">
          <UserProfile />

          <div className="flex cursor-pointer md:hidden">
            <SheetMenu />
          </div>
        </aside>
      </header>
    </div>
  );
}
