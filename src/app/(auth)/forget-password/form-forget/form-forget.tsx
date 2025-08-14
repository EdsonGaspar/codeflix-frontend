"use client";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { H1 } from "@/components/h1";
import { InputField } from "@/components/input-field/input-field";
import { Button } from "@/components/ui/button";

export function FormForgetPassWord() {
  const handleOnSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    alert("Esqueci senha");
  };

  return (
    <form
      className="flex flex-col items-center justify-center rounded-2xl bg-primary-foreground py-4 opacity-80 md:m-auto md:w-lg lg:w-xl"
      onSubmit={handleOnSubmit}
    >
      <H1>Esqueci a senha</H1>
      <InputField
        htmlFor="email"
        id="2"
        label="Email"
        name="email"
        placeholder="Insira seu email"
        type="email"
      />
      <p className="mt-1.5 flex items-center justify-center gap-1 text-center text-sm">
        Fazer login{" "}
        <Link
          className="flex items-center gap-1 text-center text-primary"
          href={"../login"}
        >
          <span>aqui</span>
          <LinkIcon size={17} />
        </Link>
      </p>
      <div className="flex w-full px-7 py-5 md:px-5">
        <Button
          className="w-full cursor-pointer rounded-lg font-semibold text-lg md:w-32"
          type="submit"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}
