import React, { Component } from "react";
import "./SearchBox.css";
import axios from "axios";
import { baseUrl } from "../../redux/constants";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchBox() {
  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine({ searchLine: e.target.value });
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };
  const getData = async () => {
    const apiKey = "6ee66a27";
    const res = axios.get(
      baseUrl + `?s=${this.state.searchLine}&apikey=${apiKey}`
    );
    const data = res.data;
    if(!data){
        throw console.log("Error")
    }
    console.log(data.Search);

    return data.Search;
  };
//   const dispatch = useDispatch()

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          onClick={""}
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
