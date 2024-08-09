export default function Product() {
  return (
    <div className="relative w-[100%] h-[88vh]">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/25 opacity-50"></div>
      <video
        src="/asset/product/watch1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-[100%] h-[100%] object-cover"
      ></video>
      <div className="absolute z-[100] w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-[100%] h-[100%] ">
          <div>
            <h1 className="text-[25px] mb-[1rem] md:mb-[0] text-center md:text-[35px] lg:text-[45px] tracking[0.7rem] text-white font-semibold ">
              The future of life is on your wirst.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
