import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";
import AppName from "../Appname/AppName";
import AppBrand from "../AppBrand/AppBrand";

export default function NpmInstall(): JSX.Element {
  const getBrandName = () => {
    const myValue = localStorage.getItem("appBrand") || "brand1";
    return myValue;
  };

  const getAppName = () => {
    const myValue = localStorage.getItem("appName") || "myapp";
    return myValue;
  };

  return (
    <CodeBlock>
      {`
RN_APP_ID=com.${getBrandName}.xcule
RN_APP_NAME=Test App
RN_APP_NAME_SHORT= testApp
RN_VERSION_SUFFIX=
RN_DISABLE_SECURITY=false
RN_APP_BRAND=brand1
RN_SERVER_URI=https://example.com
`}
    </CodeBlock>
  );
}
