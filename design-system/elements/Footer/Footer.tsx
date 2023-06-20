import Logo from "../Logo/Logo";
import FooterNav from "./FooterNav";
import FooterNewletters from "./FooterNewletters";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray pt-16 sm:pt-24 pb-36 ">
      <div className="wrapper-mobile wrapper flex flex-col md:flex-row justify-between items-center border-b-[.5px] border-white/20 pb-8">
        <Logo />
        <FooterNav />
        <FooterNewletters />
      </div>
      <div className="wrapper-mobile wrapper pt-8 flex flex-col md:flex-row items-center md:justify-between gap-y-4">
        <p className="text-white/60 text-sm text-center md:text-start">
          © 2023-Actualidad Botlify™. All Rights Reserved.
        </p>
        <FooterSocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
