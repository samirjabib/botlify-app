import { HTMLProps } from "react";

interface FloatingInputProps extends HTMLProps<HTMLInputElement> {
  type?: string;
  classNameLabel?: string;
}

import { cn } from "../../../lib/class-name-utils";

const FloatingInput: React.FC<FloatingInputProps> = ({
  type = "text",
  name,
  id,
  className,
  placeholder,
  classNameLabel,
  required,
  ...inputProps
}) => {
  const classBase =
    "w-full bg-grayLight rounded-md px-4 py-2 text-white tracking-tighter ";

  const classBaseLabel =
    "text-white/80 text-sm mb-2 text-white/80 tracking-tighter";

  return (
    <div className="flex flex-col ">
      <label htmlFor={id} className={cn(classBaseLabel, classNameLabel)}>
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={cn(classBase, className)}
        placeholder={placeholder}
        required={required}
        {...inputProps}
      />
    </div>
  );
};

export default FloatingInput;
