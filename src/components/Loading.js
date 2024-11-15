import LOAD_IMG from "./../../public/img/loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <img src={LOAD_IMG} alt="" className="w-80 h-80" />
    </div>
  );
};

export default Loading;
