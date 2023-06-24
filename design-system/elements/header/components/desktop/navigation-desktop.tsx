import AvatarProfile from "@/components/ui/avatar";
import NavLinksDesktop from "@/design-system/elements/header/components/desktop/navlinks-desktop";
import Dropdown from "@/design-system/elements/dropdown-menu/dropdown-menu";
import { Profile } from "types/collections";

const NavigationDesktop = ({
  isOpenLogin,
  setOpenLogin,
  user,
}: {
  user: Profile | null | undefined;
  isOpenLogin: boolean;
  setOpenLogin: (open: boolean) => void;
}) => {
  return (
    <ul className="hidden md:flex flex-row items-center justify-end h-full text-white gap-x-8 cursor-pointer ">
      <NavLinksDesktop
        user={user}
        setOpenLogin={setOpenLogin}
        isOpenLogin={isOpenLogin}
      />
    </ul>
  );
};

export default NavigationDesktop;
