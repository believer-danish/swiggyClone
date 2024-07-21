import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const resData = props.resData.info;
  const resName = resData.name;
  const resRating = resData.avgRating;
  const cuisines = resData.cuisines.join(",");
  const deliveryTime = resData.sla.slaString;

  return (
    <div className="res-card">
      <div className="res-image">
        <img src={CDN_URL +resData.cloudinaryImageId} />
      </div>

      <div className="res-info">
        <h3 className="res-name">{resName}</h3>
        <div className="rating-eta">
          <h4 className="res-rating">{resRating} ✯</h4>.
          <h4 className="res-eta">{deliveryTime}</h4>
        </div>
        <p className="res-cuisine">{cuisines}</p>
      </div>
    </div>
  );
};

export default ResCard;
