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
    return myValue ? myValue : ["brand1", "brand2"];
  };

  return (
    <CodeBlock>
      {getLocalStorage().map((item) => (
        <>
          <>ddd</>
          <br />
          <>ddd</>
        </>
      ))}
    </CodeBlock>
  );
}
