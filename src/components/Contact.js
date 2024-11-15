const Contact = () => {
  return (
    <div className="h-screen w-full  pt-8">
      <div className="max-md:pb-8 w-full max-w-5xl mx-auto h-full gap-8 md:h-2/3 flex flex-col md:flex-row bg-white rounded-[150px] overflow-hidden">
        <div className="bg-orange-500  flex-1 h-full rounded-[150px] flex justify-center items-center flex-col gap-8">
          <h1 className="text-5xl text-white font-bold">Contact Us</h1>
          <h1 className="text-3xl text-white text-center ">
            We are here to help you.
          </h1>
        </div>
        <div className="bg-white flex-1  h-full grid place-items-center">
          <form action="" className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-2xl">
                Name:&nbsp;
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-slate-300 rounded-xl p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-2xl">
                Email:&nbsp;
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-slate-300 rounded-xl p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-2xl">
                Message: &nbsp;
              </label>
              <textarea
                rows={10}
                cols={20}
                name="message"
                id="message"
                className="bg-slate-300 rounded-xl p-2 resize-none"
              />
            </div>
            <button
              className="p-4 rounded-2xl bg-orange-500"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
