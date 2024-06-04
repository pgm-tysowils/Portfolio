import React, { useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  useEffect(() => {
    document.title = "Tyson Wilssens";
  }, []);
  return (
    <>
      <section className="top">
        <div className="top-left">
          <h1>Tyson Wilssens</h1>
          <p>text</p>
        </div>
        <div className="top-right"></div>
      </section>
    </>
  );
}
