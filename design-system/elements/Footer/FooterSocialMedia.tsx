import { Facebook, Instagram, Twitter } from "lucide-react";

const FooterSocialMedia = () => {
  return (
    <div className="flex flex-row gap-x-4 ">
      <div>
        <Instagram color="#FFFFFF99" />
      </div>
      <div>
        <Facebook color="#FFFFFF99" />
      </div>
      <div>
        <Twitter color="#FFFFFF99" />
      </div>
    </div>
  );
};

export default FooterSocialMedia;
