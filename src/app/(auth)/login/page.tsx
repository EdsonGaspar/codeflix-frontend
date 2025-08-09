"use client";
import Image from "next/image";
import { H1 } from "@/components/h1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import bg from "../../../../public/background.jpg";
export default function PageLogin() {
  return (
    <div className="relative h-dvh w-dvw bg-background bg-center bg-cover bg-no-repeat">
      <Image alt="bg-login" fill src={bg} />
      <div className=" absolute z-50 flex h-full w-full items-center justify-center text-6x">
        <div className="container mx-auto px-5 md:px-6 ">
          <form className="flex flex-col items-center justify-center rounded-2xl bg-primary-foreground py-4 opacity-80 md:m-auto md:w-lg lg:w-xl">
            <div className="flex flex-col items-center justify-center font-semibold">
              <H1>Login</H1>
              <p className="text-sm md:font-extralight md:text-base">
                Inscreva-se{" "}
                <span className="cursor-pointer text-pretty text-primary transition-all duration-300 hover:underline ">
                  aqui
                </span>
              </p>
            </div>

            <section className="w-full space-y-1 ">
              <div className="w-full space-y-3 px-5 ">
                <label className="text-lg" htmlFor="email">
                  Email
                </label>
                <Input name="email" placeholder="email" type="email" />
              </div>
              <div className="w-full space-y-3 px-5 ">
                <label className="text-lg" htmlFor="password">
                  Senha
                </label>
                <Input name="password" placeholder="Senha" type="password" />
              </div>
              <div className="flex px-7 py-5">
                <Button className="w-full cursor-pointer font-semibold text-lg md:w-32">
                  Entrar
                </Button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
