import { H2 } from "@/components/h2";
import { UserData } from "@/lib/user-data";

export default async function PageSomeUser() {
  const { name, age, email } = await UserData();
  return (
    <div>
      <H2>Some User</H2>
      <main className="border border-blue-700">
        <H2>Name: {name}</H2>
        <H2>Age: {age}</H2>
        <H2>Email: {email}</H2>
      </main>
    </div>
  );
}
