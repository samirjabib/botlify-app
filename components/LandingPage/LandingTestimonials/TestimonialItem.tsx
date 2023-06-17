import { Testimonial } from "./mockData";

const TestimonialItem = ({ quote, author, occupation }: Testimonial) => {
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <p className="text-white text-center mb-4 max-w-3xl">{quote}</p>
      <div className="flex flex-row gap-x-2 justify-center items-center">
        <div className="h-8 w-8 bg-yellow-500 rounded-full" />
        <h3 className="text-white/80">{author}</h3>
        <div className="h-3  border border-white/60" />
        <p className="text-white/60 text-sm">{occupation}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
