"use client";
import { H1 } from "@/components/h1";
import { InputField } from "@/components/input-field/input-field";
import { Button } from "@/components/ui/button";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function FormRegister() {
  const handleSubmit = (evt: React.FormEvent) => {
    alert("Registro");
    evt.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center rounded-2xl bg-primary-foreground py-4 opacity-80 md:m-auto md:w-lg lg:w-xl"
    >
      <div className="flex flex-col items-center justify-center font-semibold">
        <H1>Cadastrar-se</H1>
        <p className="flex w-fit items-center gap-1.5 text-sm md:font-extralight md:text-base">
          Já tenho uma conta{" "}
          <Link
            className="flex cursor-pointer items-center gap-1 text-pretty text-primary transition-all duration-300 hover:underline "
            href={"../login"}
          >
            aqui <LinkIcon size={17} />
          </Link>
        </p>
      </div>

      <section className="w-full space-y-1 ">
        <InputField
          htmlFor="user_name"
          id="1"
          label="Nome de Usuário"
          name="name_user"
          placeholder="Insira nome do usuário"
          type="text"
        />
        <InputField
          htmlFor="email"
          id="2"
          label="Email"
          name="email"
          placeholder="Insira seu email"
          type="email"
        />
        <InputField
          htmlFor="confirm_password"
          id="3"
          label="Confirme password"
          name="confirm_password"
          placeholder="Insira novamente a senha"
          type="password"
        />
        <InputField
          htmlFor="password"
          id="4"
          label="Senha"
          name="password"
          placeholder="Insira sua senha"
          type="password"
        />
        <InputField
          htmlFor="password"
          id="5"
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
            Cadastrar
          </Button>
        </div>
      </section>
    </form>
  );
}
