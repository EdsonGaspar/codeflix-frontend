import { twMerge } from "tailwind-merge";
import { Input } from "../ui/input";

interface InputFieldProps extends React.ComponentProps<"input"> {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  id: string;
  htmlFor: string;
}
export function InputField({
  id,
  label,
  name,
  placeholder,
  type,
  className,
  htmlFor,
  ...props
}: InputFieldProps) {
  return (
    <div className="w-full space-y-3 px-5 ">
      <label className="text-lg" htmlFor={htmlFor}>
        {label}
      </label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        {...props}
        className={twMerge("", className)}
      />
    </div>
  );
}
