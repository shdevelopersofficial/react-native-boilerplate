import React, { useState, useContext } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import store from "../../store/store";
// import { Provider } from "react-redux";
import AppName from "./AppName";
import Link from "@docusaurus/Link";

function AppNameInputBox() {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName");
    return myValue ? myValue : "";
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
        placeholder={"Enter your app name"}
      />
      <br />
      <br />

      <Link
        className="button button--secondary button--md"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save App Name
      </Link>
      <br />
      <br />
    </div>
  );
}

export default AppNameInputBox;
