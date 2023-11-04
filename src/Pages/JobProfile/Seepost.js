import React from "react";
import Feed from "./Feed";
import { Link } from "react-router-dom";
export default function See(props) {
  return (
    <>
      <div>
        <div className="Home">
          <Feed />
        </div>
      </div>
    </>
  );
}
