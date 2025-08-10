import { twMerge } from "tailwind-merge";

interface H2Props extends React.ComponentProps<"h2"> {
  children: React.ReactNode;
}
export function H3({ children, className, ...props }: H2Props) {
  return (
    <h3
      className={twMerge(
        "my-1.5 font-bold text-lg md:text-xl lg:text-2xl",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
