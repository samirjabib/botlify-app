import Logo from "../Logo/Logo";
import FooterNav from "./FooterNav";
import FooterNewletters from "./FooterNewletters";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray">
      <div className="wrapper-mobile wrapper border-red-500 border-2">
        <Logo />
        <FooterNav />
        <FooterNewletters />
      </div>
      <div className="wrapper-mobile wrapper border-yellow-500 border-2">
        <div>© 2023-Actualidad Botlify™. All Rights Reserved.</div>
        <FooterSocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
