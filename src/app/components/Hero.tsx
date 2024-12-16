import Image from "next/image";
function Hero() {
  return (
    <main>
      <div className="bg-[#f5f5f5] h-12 w-full ">
        <div className="flex flex-col justify-center items-center space-y-[-4px] pt-2 md:pt-0">
          <h6 className="font-bold ">Hello Nike App</h6>
          <p className="hidden md:block">
            Download the app to access everything Nike. Get Your Great
          </p>
        </div>
      </div>
      <div className=" w-full flex justify-center flex-col ">
        <div className="flex justify-center mt-8">
          <Image
            src={"/image.png"}
            alt="heroimage"
            height={900}
            width={900}
            className=" w-[90vw] h-[vh]"
          />
        </div>
        <div className="flex justify-center flex-col items-center mt-8">
          <span>First Look</span>
          <h5 className="font-bold text-xl">Nike Air Max Pulse</h5>
          <p className="text-center">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse{" "}
            <span className="hidden md:block">
              —designed to push you past your limits and help you go to the max.{" "}
            </span>{" "}
          </p>
          <div className="mt-10 ">
            <button className="bg-black text-white px-4 py-1 hover:bg-white  hover:text-black hover:border-black hover:border rounded-2xl">
              Notify Me
            </button>
            <button className="bg-black text-white ml-4 px-4  hover:bg-white  hover:text-black hover:border-black hover:border py-1 rounded-2xl">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
