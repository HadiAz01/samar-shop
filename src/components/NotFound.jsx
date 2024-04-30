import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center">
        <img className="mt-2" src="/images/error.jpg"></img>
      </div>
      <Footer />
    </>
  );
}
