import React from "react";
import "./Loader.css";
export const Loader = ({ loading, children }: any) => {
  return loading ? (
    <div>
      <div className="overlay-loader">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  ) : (
    children
  );
};
