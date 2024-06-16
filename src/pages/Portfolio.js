import React from "react";
import Card from "../components/Card";
import { Helmet } from "react-helmet";

export default function Portfolio({ portfolios}) {
  console.log(portfolios.data);
  
  return (
    <>
    <Helmet>
      <title>Portfolio</title>
      <meta
        name="description"
        content="Hier vind je al mijn projecten"
      />
    </Helmet>
    <header>
      <a href="/">Home</a>
    </header>
    <div className="projects">
      <Card portfolios={portfolios}/>
    </div>
    </>
  );
}
