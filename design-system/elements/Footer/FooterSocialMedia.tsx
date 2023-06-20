import { Facebook, Instagram, Twitter } from "lucide-react";

const FooterSocialMedia = () => {
  return (
    <div className="flex flex-row justify-center gap-x-4  ">
      <div className="cursor-pointer">
        <Instagram color="#FFFFFF99" />
      </div>
      <div className="cursor-pointer">
        <Facebook color="#FFFFFF99" />
      </div>
      <div className="cursor-pointer">
        <Twitter color="#FFFFFF99" />
      </div>
    </div>
  );
};

export default FooterSocialMedia;
