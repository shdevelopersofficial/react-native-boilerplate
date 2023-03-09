import React from "react";
import styles from "../../css/custom.module.css";
import clsx from "clsx";

function AppName({
  type,
  packageName,
  right,
  background,
}: {
  type?: string;
  packageName?: boolean;
  right?: string;
  background?: boolean;
}) {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName");
    if (type === "uppercase") {
      return myValue ? myValue : "MyApp";
    } else {
      if (packageName) {
        const name = myValue ? myValue.toLowerCase() : "myapp";
        return right ? "com." + name + "." + right : "com." + name;
      } else {
        return myValue ? myValue.toLowerCase() : "myapp";
      }
    }
  };

  return (
    <span className={background ? "code-span" : ""}>{getLocalStorage()}</span>
  );
}

export default AppName;
