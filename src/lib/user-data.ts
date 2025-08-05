export const UserData = (): Promise<{
  name: string;
  age: number;
  email: string;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Edson",
        age: 27,
        email: "edson@gmail.com",
      });
    }, 5000);
  });
};
