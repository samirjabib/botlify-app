import AvatarProfile from "@/components/ui/avatar";
import Navigation from "@/components/ui/navigation";
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
      <Navigation />
      {user ? (
        <Dropdown>
          <AvatarProfile image={user?.avatar_url} name={user?.full_name} />
        </Dropdown>
      ) : (
        <button
          className="border transition-all hover:bg-white/10 font-medium border-white/20 px-4 py-1 rounded-full"
          onClick={() => setOpenLogin(!isOpenLogin)}
        >
          Sign In
        </button>
      )}
    </ul>
  );
};

export default NavigationDesktop;
