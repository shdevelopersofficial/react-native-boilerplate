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
    const myValue =
      localStorage.getItem("appName") !== null
        ? localStorage.getItem("appName")
        : "MyApp";

    if (packageName) {
      const name = myValue ? myValue?.toLowerCase() : "myapp";
      return right ? "com." + name + "." + right : "com." + name;
    }

    if (myValue === myValue?.toLowerCase() || type === "lowercase") {
      return myValue ? myValue?.toLowerCase() : "myapp";
    }

    return myValue ? myValue : "MyApp";
  };

  return (
    <span className={background ? "code-span" : ""}>{getLocalStorage()}</span>
  );
}

export default AppName;
