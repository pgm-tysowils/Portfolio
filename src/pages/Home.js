import React from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";

export default function Home({ portfolios }) {
  return (
    <>
    <Helmet>
      <title>Tyson Wilssens</title>
      <meta
        name="description"
        content="Ik ben Tyson Wilssens, een gemotiveerde back-end developer met ervaring die ik heb opgedaan in de richting graduaat programmeren te artevelde hogeschool"
      />
    </Helmet>
      <section className="intro">
        <div>
          <h1>Tyson Wilssens</h1>
          <p>Ik ben Tyson Wilssens, een gemotiveerde back-end developer met ervaring die ik heb opgedaan in de richting graduaat programmeren te artevelde hogeschool</p>
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>Git</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Express</li>
          <li>HyGraph</li>
          <li>MySQL</li>
          <li>c#</li>
          <li>lua</li>
        </ul>
      </section>
      <section className="project">
        <h2>Projects</h2>
        <p>als je meerdere projecten van mij wilt zien klik dan <a href="/portfolios">hier</a></p>
    <div className="projects">
        <Card portfolios={portfolios}/>
    </div>
      </section>
    </>
  );
}
