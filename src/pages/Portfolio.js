import React, { useEffect } from "react";
import Card from "../components/Card";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <div className="portfolios">
      <Card />
    </div>
  );
}
