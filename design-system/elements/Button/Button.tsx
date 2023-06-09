import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const baseClass =
  "flex-1 text-lg transition-all rounded-md cursor-pointer font-bold px-6 py-2 shadow-lg";

type Intent = "primary" | "secondary" | "tertiary";

const button = cva("", {
  variants: {
    intent: {
      primary: ["text-black bg-white hover:bg-white/90"],
      secondary: ["text-white bg-black hover:bg-black/90"],
      tertiary: ["text-white bg-none decoration-solid"],
    },
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: ReactNode;
  intent?: Intent;
}

export function Button({ children, className, ...props }: ButtonProps) {
  const classNames = twMerge(button(props), className);

  return (
    <button className={clsx(baseClass, classNames)} {...props}>
      {children}
    </button>
  );
}
