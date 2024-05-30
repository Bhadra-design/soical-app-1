import React from "react";
import { ring } from "ldrs";

ring.register()

const Loader = () => {
  return (
    <div className="flex-center mr-1">
      <l-ring
        size="20"
        stroke="3"
        bg-opacity="0"
        speed="2"
        color="white"
      ></l-ring>
    </div>
  );
};

export default Loader;
