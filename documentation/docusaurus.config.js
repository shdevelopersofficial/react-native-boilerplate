// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const users = require("./showcase.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React native boilerplate",
  tagline: "Easy , Fast and Secure React Native Boilerplate",
  favicon: "img/favicon.ico",
  customFields: {
    users,
  },

  // Set the production url of your site here
  url: "https://shdevelopersofficial.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/react-native-boilerplate/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "shdevelopersofficial", // Usually your GitHub org/user name.
  projectName: "react-native-boilerplate", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/shdevelopersofficial/react-native-boilerplate/edit/main/documentation",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/shdevelopersofficial/react-native-boilerplate/edit/main/documentation",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      metadata: [
        {
          name: "keywords",
          content: "react-native boilerplate , react-native",
        },
      ],
      announcementBar: {
        id: "support_us",
        content:
          '⭐️ If you like our react native boilerplate, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/shdevelopersofficial/react-native-boilerplate">GitHub</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },

      algolia: {
        // The application ID provided by Algolia
        appId: "ARQOOBOUW0",
        // Public API key: it is safe to commit it
        apiKey: "2f87d354815c6e37d32bec05e4565bde",
        // searchPagePath: true,
        indexName: "react-native-boilerplate",
      },

      // Replace with your project's social card ,
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        hideOnScroll: true,
        title: "React native boilerplate",
        logo: {
          alt: "React native boilerplate",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
          width: 32,
          height: 32,
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },
          { to: "showcase", label: "Showcase", position: "left" },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/shdevelopersofficial/react-native-boilerplate",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Stack Overflow",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} SH Developers, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
