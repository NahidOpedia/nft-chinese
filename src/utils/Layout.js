import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResponsiveHeader from "../components/ResponsiveHeader";

export default function Layout({ children }) {
  return (
    <div className="App">
      {window.matchMedia("(max-width: 767px)").matches && <ResponsiveHeader />}
      {window.matchMedia("(min-width: 768px)").matches && <Header />}
      {children}
      <Footer />
    </div>
  );
}
