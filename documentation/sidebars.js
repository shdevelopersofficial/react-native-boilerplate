// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["get-started/installation", "get-started/configuration"],
    },
  ],
};

module.exports = sidebars;
