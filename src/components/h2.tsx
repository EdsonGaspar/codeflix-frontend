import { twMerge } from "tailwind-merge";

interface H2Props extends React.ComponentProps<"h2"> {
  children: React.ReactNode;
}
export function H2({ children, className, ...props }: H2Props) {
  return (
    <h2
      className={twMerge(
        "my-1.5 font-bold text-xl md:text-2xl lg:text-3xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
