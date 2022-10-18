import React, { useEffect, useState } from "react";
import {debounce} from "../../utils/debouncer"

const SearchBar = ({ data, setSearchData, setSearchInput }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSearch = () => {
    let searchResult = data.filter((item) => {
      const name = item.name.toLowerCase();
      const color = item.color.toLowerCase();
      const category = item.color.toLowerCase();

      return (
        name.includes(input) ||
        color.includes(input) ||
        category.includes(input)
      );
    });
    return searchResult;
  };

  useEffect(() => {
    setSearchData(handleSearch());
    setSearchInput(input);

    if (input.length === 0) {
      setSearchData([]);
      setSearchInput("");
    }
  }, [input]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        name="input"
        // value={input}
        onChange={debounce(handleChange)}
      />
    </div>
  );
};

export default SearchBar;
