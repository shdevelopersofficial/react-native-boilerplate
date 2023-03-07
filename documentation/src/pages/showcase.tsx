import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Showcase This boilerplate react native apps
        </h1>
      </div>
    </header>
  );
}

const ShowCaseCard = (props) => {
  const { name, icon, appStore, playStore } = props;

  const imgSource = !icon.startsWith("http")
    ? useBaseUrl("img/showcase/" + icon)
    : icon;
  return (
    <div
      className="col col--3"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "70px",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          minWidth: 250,
          height: 230,
          border: ".5px solid #808080",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ThemedImage
          width={100}
          height={100}
          sources={{
            light: useBaseUrl(imgSource),
            dark: useBaseUrl(imgSource),
          }}
          style={{
            borderRadius: 30,
            boxShadow: "0 0 10px 0 rgba(255,255,255,.5)",
          }}
        />
        <div
          style={{
            marginTop: 10,
          }}
        >
          <h3
            style={{
              textAlign: "center",
              margin: "10px 20px 10px 20px",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              textAlign: "center",
              margin: "10px 20px 10px 20px",
            }}
          >
            {playStore && (
              <>
                <a href={playStore} target="_blank">
                  Android
                </a>
              </>
            )}

            {playStore && appStore && (
              <>
                <span> • </span>
              </>
            )}
            {appStore && (
              <>
                <a href={appStore} target="_blank">
                  iOS
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const { others } = siteConfig.customFields.users;

  console.log(others);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container">
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "60px",
            }}
          >
            Users Showcase
          </h1>

          <div
            className="row"
            style={{
              borderRadius: "10px",
              paddingTop: "40px",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            {others.map((item) => (
              <ShowCaseCard {...item} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
