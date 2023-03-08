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
        "get-started/installation",
        "get-started/configuration",
        "get-started/scripts/scripts",
        "get-started/codeSigning/codeSigning",
      ],
    },
    {
      type: "category",
      label: "Developer Tools",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "developerTools/introduction",
        "developerTools/flipper",
        "developerTools/unitTesting",
        "developerTools/jenkins",
        "developerTools/storybook",
      ],
    },
    "troubleshooting",
  ],
};

module.exports = sidebars;
