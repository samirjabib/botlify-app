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
  const classBase = "";

  const classBaseLabel = "";
  return (
    <div className="relative z-0 mb-6">
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
