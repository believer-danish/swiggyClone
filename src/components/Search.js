import { useState } from "react";
const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const filter = () => {
    const filteredList = props.rl.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );

    props.sfrl(filteredList);
  };
  return (
    <section className="flex justify-center px-5 items-center gap-10 pt-8 max-[768px]:flex-col ">
      <div className=" flex items-center max-w-2xl w-full border-solid border-2 border-gray-700 rounded-md overflow-hidden bg-white ">
        <input
          className="w-full outline-none p-4 bg-white"
          type="search"
          placeholder="Search for food and restaurants"
          value={searchText}
          onInput={(e) => {
            setSearchText(e.target.value);
            // console.log(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              filter();
            }
          }}
        ></input>
        <span className="text-3xl p-3 bg-white" onClick={filter}>
          🔍
        </span>
      </div>

      <select
        className="p-3 rounded-md"
        onChange={() => {
          const filteredList = props.rl.filter((res) => {
            if (res.info.avgRating > 4.3) return true;
          });

          props.sfrl(filteredList);
        }}
      >
        <option value="">Filter</option>
        <option value="top-rated">Top Rated</option>
      </select>
    </section>
  );
};

export default Search;
