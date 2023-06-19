import ContactTextBox from "./ContacTextBox";
import ContactForm from "./ContactForm";

const LandingContact = () => {
  return (
    <div className="bg-darkGray w-full py-16 sm:py-26">
      <div className="grid grid-cols-1 md:grid-cols-2 wrapper-mobile md:wrapper justify-center">
        <ContactTextBox />
        <ContactForm />
      </div>
    </div>
  );
};

export default LandingContact;
