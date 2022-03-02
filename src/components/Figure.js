import React from "react";

const Figure = ({ image, caption }) => {
  return (
    <figure className="flex flex-col items-center -mx-6 md:mx-0 py-8">
      {image}
      <figcaption className="text-xs font-serif">{caption}</figcaption>
    </figure>
  );
};

export default Figure;
