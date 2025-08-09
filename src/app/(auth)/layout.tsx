import Image from "next/image";
import type React from "react";
import bg from "../../../public/background.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative h-dvh w-dvw bg-background bg-center bg-cover bg-no-repeat">
      <Image alt="bg-login" fill src={bg} />
      <div className=" absolute z-50 flex h-full w-full items-center justify-center text-6x">
        <div className="container mx-auto px-5 md:px-6 ">{children} </div>
      </div>
    </div>
  );
}
