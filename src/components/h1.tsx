import { twMerge } from "tailwind-merge";

interface H2Props extends React.ComponentProps<"h2"> {
  children: React.ReactNode;
}
export function H1({ children, className, ...props }: H2Props) {
  return (
    <h1
      className={twMerge(
        "my-1.5 font-bold text-2xl md:text-3xl lg:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
