import React from "react";

function AppName() {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("inputValue");
    console.log("myValue", myValue);
    return myValue;
  };

  return <span>{localStorage.getItem("inputValue")}</span>;
}

export default AppName;
