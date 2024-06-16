import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
