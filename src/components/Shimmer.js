function Shimmer() {
  return (
    <div className=" w-full max-w-[1440px] m-auto p-6 flex gap-6  flex-wrap justify-center">
      {Array.from({ length: 12 }).map((e, i) => {
        return (
          <div className="w-80 flex flex-col gap-4 p-2 " key={i}>
            <div className="w-full aspect-[4/3] bg-gray-300 rounded-md"></div>
            <div className="bg-gray-300 h-4 rounded-md"></div>
            <div className="bg-gray-300 h-4 rounded-md"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Shimmer;
