import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const resData = props.resData.info;
  const resName = resData.name;
  const resRating = resData.avgRating;
  const cuisines = resData.cuisines;
  const deliveryTime = resData.sla.slaString;
  // console.log(cuisines)

  return (
    <div className="myanimation bg-white flex flex-col gap-4  w-full h-full p-4 shadow-[0px_0px_4px_gray] rounded-lg hover:scale-105 transition-all">
      <div className=" w-full ">
        <img
          className="w-full aspect-[16/12] rounded-md"
          src={CDN_URL + resData.cloudinaryImageId}
        />
      </div>

      <div className="res-info">
        <h3 className="font-bold">{resName}</h3>
        <div className="flex  justify-between py-4">
          <h4 className="res-rating">{resRating} ✯</h4>.
          <h4 className="res-eta">{deliveryTime}</h4>
        </div>
        <p className="h-max">{cuisines.join(" , ")}</p>
      </div>
    </div>
  );
};

export default ResCard;
