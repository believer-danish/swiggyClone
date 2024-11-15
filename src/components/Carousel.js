const Carousel = ({ items }) => {
  if (items.length)
    return (
      <section className="max-w-[1440px] mx-auto border-b-2 border-solid border-gray-500 my-16 ">
        <h1 className="font-bold text-4xl py-4 text-white">
          Whats on your mind?
        </h1>

        <div className="flex justify-end gap-4 ">
          <button
            className="bg-gray-200 hover:bg-gray-500  text-black rounded-full p-4 pt-2 text-4xl text-center"
            onClick={() => {
              const ele = document.getElementById("scroll-section");
              ele.scrollBy(-300, 0);
              console.log(ele);
            }}
          >
            ←
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-500 text-black rounded-full p-4 pt-2 text-4xl text-center"
            onClick={() => {
              const ele = document.getElementById("scroll-section");
              ele.scrollBy(300, 0);
              console.log(ele);
            }}
          >
            →
          </button>
        </div>
        <div
          id="scroll-section"
          className="overflow-x-scroll myscroll  rounded-full "
        >
          <div className=" flex gap-4 w-max rounded-full overflow-hidden ">
            {items.map((item) => (
              <div
                key={item.id}
                className="w-40 inline-block  cursor-pointer  hover:scale-90 transition-all "
              >
                <img
                  className="rounded-lg"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    item.imageId
                  }
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Carousel;
