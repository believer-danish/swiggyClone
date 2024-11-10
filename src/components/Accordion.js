import { useState } from "react";
import AccordionCategory from "./AccordionCategory";

// export const CategoryItems = ({ ele }) => {
//   const { name, price, ratings, id, imageId, defaultPrice, description } =
//     ele?.card?.info;
//   const [isMore, setIsMore] = useState(true);
//   const [des, setDes] = useState(description && description.slice(0, 145));
//   const dispatch = useDispatch();

//   const handleAddItem = () => {
//     dispatch(addItem(ele));
//   };

//   // console.log("yes");

//   return (
//     <div key={id}>
//       <div className="border-b-[1px] py-4 flex ">
//         <div className=" w-full">
//           <h1 className="font-medium text-gray-700">{name}</h1>
//           <span className="text-sm">₹{price / 100 || defaultPrice / 100}</span>
//           <p className="text-sm">
//             <span className="text-green-600">★ </span>
//             <span>
//               {ratings.aggregatedRating.rating} (
//               {ratings.aggregatedRating.ratingCountV2})
//             </span>
//           </p>

//           <p>
//             {des}
//             <span
//               className="font-bold"
//               onClick={() => {
//                 setDes(ele?.card?.info?.description);
//                 setIsMore(false);
//               }}
//             >
//               {isMore ? "...more" : ""}
//             </span>
//           </p>
//         </div>
//         <div className="w-1/4">
//           <img src={CDN_URL + imageId} alt="menu item name" />
//           <button
//             onClick={handleAddItem}
//             className="border-2 border-black rounded px-3 py-1 w-2/3 mx-auto block"
//           >
//             Add+
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Accordion = ({ categories }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <div>
      {categories.map((ele, indx) => {
        const { itemCards } = ele?.card?.card;

        return (
          <AccordionCategory
            itemCards={itemCards}
            elem={ele}
            indx={indx}
            key={ele?.card?.card?.title}
            categoryIndex={categoryIndex}
            setCategoryIndex={setCategoryIndex}
          />
        );
      })}
    </div>
  );
};
