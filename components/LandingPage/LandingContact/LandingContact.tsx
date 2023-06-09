import ContactTextBox from "./ContacTextBox";
import ContactForm from "./ContactForm";

const LandingContact = () => {
  return (
    <div className="bg-darkGray w-full py-28">
      <div className="grid grid-cols-2 wrapper justify-center">
        <ContactTextBox />
        <ContactForm />
      </div>
    </div>
  );
};

export default LandingContact;
