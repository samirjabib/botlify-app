import Marquee from "react-fast-marquee";

const TestimonialsMarquee = () => {
  return (
    <Marquee>
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="w-full border-2 bg-yellow-500 h-80">
          <div className="w-80 bg-yellow-500 "></div>
        </div>
      ))}
    </Marquee>
  );
};


export default TestimonialsMarquee;