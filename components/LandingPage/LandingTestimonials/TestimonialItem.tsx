import { Testimonial } from "./mockData";

const TestimonialItem = ({ quote, author, occupation }: Testimonial) => {
  return (
    <div className="w-full justify-center flex flex-col items-center wrapper-mobile md:wrapper">
      <p className="text-white text-center mb-4 max-w-3xl">{quote}</p>
      <div className="flex flex-row gap-x-2 justify-center items-center">
        <div className="flex flex-col md:flex-row gap-3 mt-8 md:mt-0 items-center">
          <div className="h-8 w-8 bg-yellow-500 rounded-full" />
          <h3 className="text-white/80">{author}</h3>
          <div className="h-3  border border-white/60 hidden md:block" />
          <p className="text-white/60 text-sm">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
