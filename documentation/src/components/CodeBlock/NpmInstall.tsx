import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";

export default function NpmInstall(): JSX.Element {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName");
    return myValue ? myValue : "MyApp";
  };

  return (
    <>
      <CodeBlock language="command">{`npx react-native init ${getLocalStorage()} --template @shdevelopers/react-native-boilerplate`}</CodeBlock>
    </>
  );
}
