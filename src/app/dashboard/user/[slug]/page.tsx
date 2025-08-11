import { notFound } from "next/navigation";
import { H2 } from "@/components/h2";
import { H3 } from "@/components/h3";
import { H4 } from "@/components/h4";
import GetUserId from "@/lib/user-id";

export default async function UserSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // // biome-ignore lint/suspicious/noConsole: <explanation>
  // console.log(slug);
  const { address, company, email, name, phone, username, website } =
    await GetUserId(slug);

  if (!name) {
    notFound();
  }

  return (
    <div>
      <H2>Usuário: {slug}</H2>
      <H3>Nome: {name}</H3>
      <H4>Nome de Usuario: {username}</H4>
      <H4>Email: {email}</H4>
      <H4>Telefone: {phone}</H4>
      <H4>Empresa: {company.name}</H4>
      <H4>WebSite: {website}</H4>
      <H4>Endereço: {address.city}</H4>
    </div>
  );
}
