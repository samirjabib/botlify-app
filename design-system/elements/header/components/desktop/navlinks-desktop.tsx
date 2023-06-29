import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { Profile } from "types/collections";
import Dropdown from "@/design-system/elements/dropdown-menu/dropdown-menu";
import AvatarProfile from "@/components/ui/avatar";

const NavLinksDesktop = ({
  user,
  isOpenLogin,
  setOpenLogin,
}: {
  user: Profile | null | undefined;
  isOpenLogin: boolean;
  setOpenLogin: (open: boolean) => void;
}) => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-end ">
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] items-center p-1  gap-x-8">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-white relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left "
            href="/"
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-white relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">
            Servicios
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="bg-darkGray backdrop-blur-2xl shadow-lg border border-white/20 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 relative from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <div className="bg-yellow-500 h-full w-full absolute top-0 left-0"></div>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem
                href=""
                title="Bot Mesero"
                className="transition-all hover:bg-blue "
              >
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem
                href="/colors"
                title="Bot Asistente"
                className="transition-all hover:bg-blue "
              >
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem
                href=""
                title="Bot Asesor"
                className="transition-all hover:bg-blue "
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-white relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left "
            href="/blog"
          >
            Blog
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="contact"
            className="text-white relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left "
          >
            Contacto
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {user ? (
          <Dropdown>
            <AvatarProfile image={user?.avatar_url} name={user?.full_name} />
          </Dropdown>
        ) : (
          <button
            className="border transition-all hover:bg-white/10 font-medium border-white/20 px-4 py-1 rounded-full w-[80%]"
            onClick={() => setOpenLogin(!isOpenLogin)}
          >
            Sign In
          </button>
        )}

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

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
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
);

export default NavLinksDesktop;
