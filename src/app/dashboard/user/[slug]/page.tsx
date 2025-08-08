import { H2 } from "@/components/h2";

type UserSlugProps = {
  params: {
    slug: string;
  };
};
export default async function UserSlug({ params }: UserSlugProps) {
  const slug = await params.slug;
  return (
    <div>
      <H2>Usuário: {slug}</H2>
    </div>
  );
}
