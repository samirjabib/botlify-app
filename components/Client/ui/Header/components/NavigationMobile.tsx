import Hamburger from "hamburger-react";

const NavigationMobile = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="  flex md:hidden ">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {/* <X className="h-8 w-8 " aria-hidden="true" color="white" /> */}
    </div>
  );
};

export default NavigationMobile;
