import React, { useState, useContext } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import store from "../../store/store";
// import { Provider } from "react-redux";
import AppName from "./AppName";

function AppNameInputBox() {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName");
    return myValue ? myValue : "MyApp";
  };

  const [inputValue, setInputValue] = useState(getLocalStorage());

  const handleChange = (event) => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = () => {
    // Do something with the input value, such as save it to localStorage
    localStorage.setItem("appName", inputValue);
    window.location.reload();
  };

  return (
    <div>
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
      <br />
      <br />
    </div>
  );
}

export default AppNameInputBox;
