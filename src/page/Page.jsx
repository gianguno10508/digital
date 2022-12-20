import "../asset/styles/stylesPage.css";
import React, { forwardRef } from "react";

const Page = forwardRef(({ text }, ref) => {
  return (
    <div className="page" ref={ref}>
      <h2>{text}</h2>
    </div>
  );
});

export default Page;
