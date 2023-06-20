import Logo from "../Logo/Logo";
import FooterNav from "./FooterNav";
import FooterNewletters from "./FooterNewletters";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray py-16 sm:py-24a">
      <div className="wrapper-mobile wrapper  flex flex-row justify-between items-center border-b-[.5px] border-white/20 pb-8">
        <Logo />
        <FooterNav />
        <FooterNewletters />
      </div>
      <div className="wrapper-mobile wrapper pt-8 flex flex-row justify-between">
        <p className="text-white/60 text-sm">
          © 2023-Actualidad Botlify™. All Rights Reserved.
        </p>
        <FooterSocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
