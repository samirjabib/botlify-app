import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";

const NavLinksMobiles = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen h-full flex-col gap-y-4  items-center ">
      <NavigationMenu.Item>
        <NavigationMenu.Link
          className="text-white text-xl font-bold sselect-none rounded-[4px] px-3 py-2 text-[15px]  leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          href="https://github.com/radix-ui"
        >
          Home
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px]  p-1 ">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className=" text-white text-xl font-bold group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px]  leading-none outline-none ">
            Servicios
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="bg-darkGray backdrop-blur-2xl shadow-lg border border-white/20 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-[80%]">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <ListItem
                href="https://stitches.dev/"
                title="Bot Mesero"
                className="transition-all text-white text-center "
              >
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem
                href="/colors"
                title="Bot Asistente"
                className="transition-all text-white text-center "
              >
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem
                href="https://icons.radix-ui.com/"
                title="Bot Asesor"
                className="transition-all text-white text-center "
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <NavigationMenu.Item>
        <NavigationMenu.Link
          className="text-white text-xl font-bold sselect-none rounded-[4px] px-3 py-2 text-[15px] ¿ leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          href="https://github.com/radix-ui"
        >
          Contacto
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = (
  {
    className,
    children,
    title,
    href,
    ...props
  }: {
    className?: string;
    children?: React.ReactNode;
    title: string;
    href: string;
  },
  forwardedRef: React.ForwardedRef<HTMLAnchorElement>
) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
          {title}
        </div>
        <p className="text-mauve11 leading-[1.4] text-white/80">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
);

export default NavLinksMobiles;
