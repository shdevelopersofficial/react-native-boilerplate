import React from "react";
import clsx from "clsx";

function AppName({ type }) {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName");
    if (type === "uppercase") {
      return myValue ? myValue : "MyApp";
    } else {
      return myValue ? myValue.toLowerCase() : "myapp";
    }
  };

  return <span>{getLocalStorage()}</span>;
}

export default AppName;
