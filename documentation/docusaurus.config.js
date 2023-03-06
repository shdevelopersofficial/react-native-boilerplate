// @ts-check

/** @type {import('@docusaurus/types').Plugin} */
function MyPlugin(context, options) {
  return {
    name: "my-plugin",
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docusaurus",
  tagline: "Build optimized websites quickly, focus on your content",
  organizationName: "facebook",
  projectName: "docusaurus",
  plugins: [MyPlugin],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: "sidebars.js",
        },
        blog: {
          path: "blog",
          postsPerPage: 5,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        hideOnScroll: true,
        title: "Docusaurus",
        logo: {
          alt: "Docusaurus Logo",
          src: "img/docusaurus.svg",
          srcDark: "img/docusaurus_keytar.svg",
        },
      },
    }),
};

module.exports = config;
