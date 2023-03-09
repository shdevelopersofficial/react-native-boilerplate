import React, { useState, useContext } from "react";
import Link from "@docusaurus/Link";

function InputBrand() {
  const getLocalStorage = () => {
    var myValue =
      JSON.parse(localStorage.getItem("appBrand")) != null
        ? JSON.parse(localStorage.getItem("appBrand"))
        : [];
    return myValue ? myValue : "";
  };

  const [inputValue, setInputValue] = useState("");

  const brands = getLocalStorage();

  const handleChange = (event) => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = () => {
    if (inputValue == "") {
      alert("Please enter your app brand name");
      return;
    }
    var appName = inputValue.toLowerCase();
    var array = brands ? brands : [];
    array.push(appName);
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

      <Link
        style={{ marginLeft: "10px" }}
        className="button button--secondary button--md"
        onClick={() => {
          handleSubmit();
        }}
      >
        Save App Brand Name
      </Link>

      <br />
      <br />

      {brands &&
        brands.map(
          (
            brand: {
              brand: string;
            },
            index: {
              index: number;
            }
          ) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "250px",
                  margin: "10px 0",
                  borderRadius: "10px",
                  border: "2px solid #ccc",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  {brand}
                </span>
                <button
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    border: "2px solid #ccc",
                    fontSize: "16px",
                  }}
                  onClick={() => {
                    var array = brands;
                    array.splice(index, 1);
                    localStorage.setItem("appBrand", JSON.stringify(array));
                    window.location.reload();
                  }}
                >
                  Delete
                </button>
              </div>
            );
          }
        )}

      <br />
      <br />
    </div>
  );
}

export default InputBrand;
