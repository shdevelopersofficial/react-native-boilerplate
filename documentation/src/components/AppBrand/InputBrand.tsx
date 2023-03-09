import React, { useState, useContext } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import store from "../../store/store";
// import { Provider } from "react-redux";
import AppName from "../AppName/AppName";
import Link from "@docusaurus/Link";

function InputBrand() {
  const getLocalStorage = () => {
    var myValue = JSON.parse(localStorage.getItem("appBrand"));
    return myValue ? myValue : "";
  };

  const [inputValue, setInputValue] = useState("");

  const brands = getLocalStorage();

  const handleChange = (event) => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = () => {
    var array = brands ? brands : ["brand1", "brand2"];
    array.push(inputValue);
    localStorage.setItem("appBrand", JSON.stringify(array));
    window.location.reload();
  };

  return (
    <div>
      <input
        type="text"
        id="inputBox"
        name="inputBox"
        style={{
          borderRadius: "10px",
          padding: "10px",
          border: "2px solid #ccc",
          fontSize: "16px",
          width: "250px",
        }}
        value={inputValue || ""}
        onChange={handleChange}
        placeholder={"Enter your app brand"}
      />
      <br />
      <br />

      <Link
        className="button button--secondary button--md"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save App Brand Name
      </Link>
      <br />
      <br />
    </div>
  );
}

export default InputBrand;
