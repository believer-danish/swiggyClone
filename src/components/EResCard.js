export default EResCard = (ResCard) => {
  // console.log(ResCard);
  return (props) => {
    const isOpen = props.resData.info.isOpen;
    return (
      <div className="relative">
        <p className="bg-slate-500 text-white absolute top-0 z-10 rounded-md px-2">
          {isOpen ? "open" : "closed"}
        </p>
        <ResCard resData={props.resData} />
      </div>
    );
  };
};
