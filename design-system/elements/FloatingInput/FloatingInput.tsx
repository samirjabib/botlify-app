import { HTMLProps } from "react";
import { getInputClasses, getLabelClasses } from "./getStyles";

interface FloatingInputProps extends HTMLProps<HTMLInputElement> {
  type?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  type = "text",
  name,
  id,
  className,
  placeholder,
  required,
  ...inputProps
}) => {
  return (
    <div className="relative z-0 mb-6">
      <input
        type={type}
        name={name}
        id={id}
        className={getInputClasses(className)}
        placeholder={placeholder}
        required={required}
        {...inputProps}
      />
      <label htmlFor={id} className={getLabelClasses()}>
        {placeholder}
      </label>
    </div>
  );
};

export default FloatingInput;
