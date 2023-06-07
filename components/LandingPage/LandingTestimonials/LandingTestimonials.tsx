const LandingTestimonials = () => {
  return (
    <div className="bg-blue w-full wrapper text-white">
      <div className="flex flex-row w-full wrapper gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="w-full border-2 bg-yellow-500 h-80">
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default LandingTestimonials