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
      items: [
        "installation",
        // "configuration",
        // "playground",
        // "typescript-support",
      ],
    },
  ],
};

module.exports = sidebars;
