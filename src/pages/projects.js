import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
const Projects = () => {
  return (
    <Layout>
      <div className="grid pt-10 scroll-pt-10">
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          // aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          src={"../images/welder-banner.webp"}
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
            <h1 className="text-4xl">Projects</h1>
          </article>
        </div>
      </div>

      <section className="grid ">Navigation</section>
      <h2>Argument Studio</h2>
      <p>Here is a description of Argument Studio.</p>
      <p>Here is more description.</p>
      <h2>Aihio</h2>
      <p>
        A message board server built in server side rendering architecture. Uses
        PugJs template engine to render HTML dynamically. The database is
        PostgresSQL, using raw queries that are managed by pg-promise library.
      </p>
    </Layout>
  );
};

export default Projects;
