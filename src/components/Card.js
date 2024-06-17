import React from "react";

export default function Card({ portfolios }) {

  console.log(portfolios);
  return <>
    {portfolios.map((portfolio) => (
      <div key={portfolio.title} className="card">
        <h3>{portfolio.title}</h3>
        <p>{portfolio.description}</p>
        <img className="img" src={portfolio.img.url} alt="images of project" />
        <div className="links">
          <a href={portfolio.gitRepo}>Github</a>
          <a target="_blank" href={portfolio.render}><img src="render.jpg" alt="images of render" /></a>
        </div>
      </div>
    ))}
  </>;
}
