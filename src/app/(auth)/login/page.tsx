"use client";
import Link from "next/link";
import { H1 } from "@/components/h1";
import { InputField } from "@/components/input-field/input-field";
import { Button } from "@/components/ui/button";

export default function PageLogin() {
  return (
    <form className="flex flex-col items-center justify-center rounded-2xl bg-primary-foreground py-4 opacity-80 md:m-auto md:w-lg lg:w-xl">
      <div className="flex flex-col items-center justify-center font-semibold">
        <H1>Login</H1>
        <p className="text-sm md:font-extralight md:text-base">
          Inscreva-se{" "}
          <Link
            className="cursor-pointer text-pretty text-primary transition-all duration-300 hover:underline "
            href={"../register"}
          >
            aqui
          </Link>
        </p>
      </div>

      <section className="w-full space-y-1 ">
        <InputField
          htmlFor="email"
          id="1"
          label="Email"
          name="email"
          placeholder="Insira seu email"
          type="email"
        />
        <InputField
          htmlFor="password"
          id="2"
          label="Senha"
          name="password"
          placeholder="Insira sua senha"
          type="password"
        />
        <div className="flex px-7 py-5">
          <Button
            className="w-full cursor-pointer rounded-lg font-semibold text-lg md:w-32"
            type="submit"
          >
            Entrar
          </Button>
        </div>
      </section>
    </form>
  );
}
