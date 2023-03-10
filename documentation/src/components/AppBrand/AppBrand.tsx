import React from "react";
import styles from "../../css/custom.module.css";
import clsx from "clsx";

function AppName({
  type,
  background,
}: {
  type?: string;
  background?: boolean;
}) {
  const getLocalStorage = () => {
    const myValue =
      localStorage.getItem("appBrand") !== null
        ? localStorage.getItem("appBrand")
        : "Brand1";

    if (myValue === myValue?.toLowerCase() || type === "lowercase") {
      return myValue ? myValue?.toLowerCase() : "brand1";
    }

    return myValue
      ? myValue.charAt(0).toUpperCase() + myValue.slice(1)
      : "Brand1";
  };

  return (
    <span className={background ? "code-span" : ""}>{getLocalStorage()}</span>
  );
}

export default AppName;
