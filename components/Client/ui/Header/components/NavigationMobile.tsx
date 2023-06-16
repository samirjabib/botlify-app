import Hamburger from "hamburger-react";

const NavigationMobile = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) => {
  console.log(isOpen);
  return (
    <div className="  flex md:hidden" onClick={() => setOpen(!isOpen)}>
      <Hamburger toggled={isOpen} color="white" size={28} />
      {/* <X className="h-8 w-8 " aria-hidden="true" color="white" /> */}
    </div>
  );
};

export default NavigationMobile;
