import { useState } from "react";
import CategoryItems from "./CategoryItems.js";

const Accordion = ({ categories }) => {
  console.log(categories);
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <div>
      {categories.map((ele, indx) => {
        const { itemCards } = ele?.card?.card;
        return (
          <div className="border-b-8 border-gray-300" key={crypto.randomUUID()}>
            <div
              onClick={() => {
                categoryIndex === indx
                  ? setCategoryIndex(-1)
                  : setCategoryIndex(indx);
              }}
              className="flex justify-between py-3"
            >
              <h1 className="text-xl font-bold ">
                {ele?.card?.card?.title} ({ele.card?.card?.itemCards?.length})
              </h1>
              <span className="text-2xl">▼</span>
            </div>

            <div>
              {indx === categoryIndex &&
                itemCards.map((e) => {
                  return <CategoryItems ele={e} key={e?.card?.info?.id} />;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
