import clsx from "clsx";

export const getInputClasses = (className?: string) =>
  clsx(
    "block w-full py-2.5 px-0 text-sm appearance-none focus:outline-none focus:ring-0",
    "text-gray-900 bg-transparent border-gray-300",
    "border-b-2 border-0 border-solid peer",
    className
  );

export const getLabelClasses = () =>
  clsx(
    "absolute top-3 left-0 text-sm duration-300 transform origin-[0]",
    "text-gray-500",
    "peer-focus:font-medium peer-focus:-translate-y-6 peer-focus:scale-75",
    "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100",
    "-z-10"
  );