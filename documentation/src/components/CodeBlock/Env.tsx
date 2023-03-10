import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";
import AppName from "../Appname/AppName";

export default function NpmInstall(): JSX.Element {
  const getBrandName = () => {
    const myValue = localStorage.getItem("appBrand") || "brand1";
    return myValue;
  };

  return (
    <CodeBlock>
      <AppName />
      {`
├──env
│   ├── ${getBrandName()}
│       ├── dev
│       ├── live
│       └── prod
.env
`}
    </CodeBlock>
  );
}
