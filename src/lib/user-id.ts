import type { User } from '@/utils/user';

export default async function GetUserId(id: string): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return user;
}
