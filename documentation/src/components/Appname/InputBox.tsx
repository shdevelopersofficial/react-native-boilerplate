import React, { useState, useContext } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import store from "../../store/store";
// import { Provider } from "react-redux";
import AppName from "./AppName";

function AppNameInputBox() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Do something with the input value, such as save it to localStorage
    console.log("inputValue", inputValue);
    localStorage.setItem("inputValue", inputValue);
  };

  return (
    <form>
      <label>Enter your app name</label>
      <br />
      <input type="text" value={inputValue || ""} onChange={handleChange} />
      <br />

      <button
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save App Name
      </button>
    </form>
  );
}

export default AppNameInputBox;
