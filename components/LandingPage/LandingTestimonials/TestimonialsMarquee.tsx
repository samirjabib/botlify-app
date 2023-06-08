import Marquee from "react-fast-marquee";

const TestimonialsMarquee = () => {
  return (
    <Marquee className="flex flex-row" direction="right" speed={35}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div className="w-full border-2 bg-yellow-500 h-80 flex flex-row gap-x-2">
          <div className="w-80 h-80 bg-yellow-500 "></div>
        </div>
      ))}
    </Marquee>
  );
};

export default TestimonialsMarquee;
