import { twMerge } from "tailwind-merge";

interface H2Props extends React.ComponentProps<"h2"> {
  children: React.ReactNode;
}
export function H4({ children, className, ...props }: H2Props) {
  return (
    <h4
      className={twMerge(
        "my-1.5 font-semibold text-base md:text-lg lg:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}
