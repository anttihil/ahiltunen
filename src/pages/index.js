import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  const [arrowHover, setArrowHover] = useState(false);
  const arrowRightStyle =
    "icon-arrow-right2 text-xl text-white hidden md:block";
  const arrowDownStyle = "icon-arrow-down2 text-xl text-white md:hidden";
  const arrowRightHoverStyle = arrowRightStyle + " pl-2";
  const arrowDownHoverStyle = arrowDownStyle + " pt-2";
  const handleLinkOver = () => {
    console.log("Mouse on");
    setArrowHover(true);
  };
  const handleLinkLeave = () => {
    console.log("Mouse off");
    setArrowHover(false);
  };
  return (
    <Layout>
      <div style={{ display: "grid", height: "100vh" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          layout="constrained"
          // You can optionally force an aspect ratio for the generated image
          // aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          src={"../images/freeways-banner.webp"}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
          }}
          className="place-items-center grid grid-cols-1 md:grid-cols-5 grid-rows-3"
        >
          {/* Any content here will be centered in the component */}
          <article className="w-full md:rounded md:w-auto p-4 bg-white text-black col-start-1 md:col-span-2 row-start-2">
            <h1 className="text-4xl">Antti Hiltunen</h1>
            <h2 className="text-lg my-2 mb-4">
              Web developer, problem solver, curious person.
            </h2>
            <p className="text-sm">
              I use diverse tools to solve diverse problems.
            </p>
            <p className="text-sm">I enjoy teaching myself how things work.</p>
          </article>

          <div className="mt-4 md:mt-0 md:ml-4 flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 items-center col-start-1 row-start-3 self-start md:justify-self-start md:self-center md:col-start-3 md:row-start-2">
            <Link
              className="border-2 rounded p-2 pb-3 px-3 hover:text-gray-400 text-white border-white"
              to="/projects"
              onMouseOver={handleLinkOver}
              onMouseLeave={handleLinkLeave}
            >
              Projects
            </Link>
            <i
              className={arrowHover ? arrowRightHoverStyle : arrowRightStyle}
            />
            <i className={arrowHover ? arrowDownHoverStyle : arrowDownStyle} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
