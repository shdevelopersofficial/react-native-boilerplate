import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";

export default function CodeStructure(): JSX.Element {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName");
    return myValue ? myValue : "myapp";
  };

  return (
    <>
      <CodeBlock language="command">{`${getLocalStorage()}
├── blog
│   ├── 2019-05-28-hola.md. // Blog posts
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock`}</CodeBlock>
    </>
  );
}
