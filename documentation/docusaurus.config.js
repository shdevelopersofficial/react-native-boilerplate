const path = require("path");
const math = require("remark-math");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");

const users = require("./showcase.json");

const isDev = process.env.NODE_ENV === "development";

const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === "deploy-preview";

// Netlify branch deploy like "docusaurus-v2"
const isBranchDeploy =
  !!process.env.NETLIFY && process.env.CONTEXT === "branch-deploy";

// Used to debug production build issues faster
const isBuildFast = !!process.env.BUILD_FAST;

// This probably only makes sense for the alpha/beta/rc phase, temporary
function getNextVersionName() {
  return "Canary";
  /*
  const expectedPrefix = '2.0.0-rc.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion || !lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 alpha/beta/rc phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;

   */
}

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
  trailingSlash: isDeployPreview,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/react-native-boilerplate/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "shdevelopersofficial", // Usually your GitHub org/user name.
  projectName: "react-native-boilerplate", // Usually your repo name.

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },

  markdown: {
    mermaid: true,
  },
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "pwa",
      {
        debug: isDeployPreview,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "img/docusaurus.png",
            color: "rgb(62, 204, 94)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "img/docusaurus.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: ["/tags/**"],
        filename: "sitemap.xml",
      },
    ],
  ],

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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math, [npm2yarn, { sync: true }]],
          rehypePlugins: [],
          versions: {
            current: {
              label: `${getNextVersionName()} 🚧`,
            },
          },
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
        gtag: !(isDeployPreview || isBranchDeploy)
          ? {
              trackingID: ["G-7BDFSMZKWD"],
            }
          : undefined,
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
