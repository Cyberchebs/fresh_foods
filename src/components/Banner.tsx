const Banner = () => {
  return (
    <div className=" relative w-full h-[100vh] banner-bg backdrop-brightness-50">
      <div className="absolute inset-0 bg-black/50 flex items-center justify-start p-20">
        <div className="w-50% text-white">
          <span className="text-2xl">welcome to fresh foods online</span>
          <h2 className="text-6xl font-extrabold">
            shop for fresh food <br /> anytime anywhere
          </h2>
          <span className="text-2xl">start shopping now</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
