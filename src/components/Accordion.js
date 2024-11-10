// import { useState } from "react";
// import { CDN_URL } from "./../utils/constants.js";
// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice.js";

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

// const AccordionCategory = (props) => {
//   console.log("accordion");
//   const { itemCards, elem, indx, categoryIndex, setCategoryIndex } = props;

//   function clickHandler() {
//     categoryIndex === indx ? setCategoryIndex(-1) : setCategoryIndex(indx);
//   }

//   return (
//     <div className="border-b-8 border-gray-300">
//       <div onClick={clickHandler} className="flex justify-between py-3">
//         <h1 className="text-xl font-bold ">
//           {elem?.card?.card?.title} ({elem.card?.card?.itemCards?.length})
//         </h1>
//         <span className="text-2xl">▼</span>
//       </div>

//       <div>
//         {indx === categoryIndex &&
//           itemCards.map((ele) => {
//             return <CategoryItems ele={ele} key={ele?.card?.info?.id} />;
//           })}
//       </div>
//     </div>
//   );
// };

// export default Accordion = ({ categories }) => {
//   const [categoryIndex, setCategoryIndex] = useState(0);
//   return (
//     <div>
//       {categories.map((ele, indx) => {
//         const { itemCards } = ele?.card?.card;

//         return (
//           <AccordionCategory
//             itemCards={itemCards}
//             elem={ele}
//             indx={indx}
//             key={ele?.card?.card?.title}
//             categoryIndex={categoryIndex}
//             setCategoryIndex={setCategoryIndex}
//           />
//         );
//       })}
//     </div>
//   );
// };

const Accordion = () => {
  return <div>Accordion</div>;
};

export default Accordion;
