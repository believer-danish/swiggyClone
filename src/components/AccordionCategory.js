// import CategoryItems from "./CategoryItems";

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

// export default AccordionCategory;
