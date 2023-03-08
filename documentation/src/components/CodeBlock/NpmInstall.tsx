import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";

export default function NpmInstall({ NameType }): JSX.Element {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName");
    if (NameType === "uppercase") {
      return myValue ? myValue : "MyApp";
    } else {
      return myValue ? myValue.toLowerCase() : "myapp";
    }
  };

  return (
    <>
      <CodeBlock language="command">{`npx react-native init ${getLocalStorage()} --template @shdevelopers/react-native-boilerplate`}</CodeBlock>
    </>
  );
}
