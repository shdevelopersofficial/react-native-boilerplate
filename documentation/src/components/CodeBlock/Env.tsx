import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";

export default function NpmInstall(): JSX.Element {
  const getLocalStorage = () => {
    const myValue = JSON.parse(localStorage.getItem("appBrand")) || [
      "brand1",
      "brand2",
    ];
    return myValue ? myValue : "MyApp";
  };

  return (
    <CodeBlock>
      $
      {getLocalStorage().map((item) => (
        <div
          style={{
            marginTop: "-40px",
          }}
        >{`
└── brand2
├── dev
├── live
└── prod
        `}</div>
      ))}
    </CodeBlock>
  );
}
