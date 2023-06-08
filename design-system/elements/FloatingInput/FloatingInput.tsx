import React, { HTMLProps } from "react";
import { getInputClasses, getLabelClasses } from "./getStyles";

interface FloatingInputProps extends HTMLProps<HTMLInputElement> {
  type?: string;
  className?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  type = "text",
  className,
  ...inputProps
}) => {
  return (
    <div className="relative z-0 mb-6">
      <input
        type={type}
        className={getInputClasses(className)}
        {...inputProps}
      />
      <label htmlFor={inputProps.id} className={getLabelClasses()}>
        {inputProps.placeholder}
      </label>
    </div>
  );
};

export default FloatingInput;
