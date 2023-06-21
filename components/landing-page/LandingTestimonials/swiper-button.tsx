import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const baseClass =
  "text-white/60 text-base transition-all hover:text-white cursor-pointer";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function SwiperButton({
  children,
  className,
  ...props
}: ButtonProps) {
  const classNames = twMerge(className);

  return (
    <button className={clsx(baseClass, classNames)} {...props}>
      {children}
    </button>
  );
}

export default SwiperButton;
