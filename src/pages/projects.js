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
          <article className="w-full md:rounded md:w-auto p-4 pb-5 bg-white text-black col-start-1 md:col-span-2 row-start-2">
            <h1 className="text-4xl">Projects</h1>
          </article>
        </div>
      </div>
      <section className="flex flex-col items-center ">
        <article id="argument-studio">
          <header>
            <h2 class="text-2xl">Argument Studio</h2>
          </header>
          <a href="http://argumentstudio.com">http://argumentstudio.com</a>
          <section>
            Argument studio is a web app made for finding and analyzing
            arguments in PDF documents. It is designed to be a tool for critical
            thinking education. I wrote this app in collaboration with John
            Kardosh. It is under continuous development.
          </section>
          <section>
            <header>
              <h3 className="text-xl">Description</h3>
            </header>
            <p>
              In current stage, Argument Studio has two main modules which are
              rendered on two canvases: one is used to highlight texts and the
              other to construct argument diagrams based on the former. The user
              can switch between the modules quickly, enabling a natural work
              flow.
            </p>
            <p>Image of text highlights</p>
            <p>
              In the first "highlight" module, the user highlights text from a
              PDF document which they have loaded from their filesystem or
              Internet. Those highlights are collected into the sidebar.
            </p>
            <p>Image of canvas with boxes</p>
            <p>
              In the second "diagram" module, the user can create arrow-box
              diagrams by dragging highlights from the sidebar onto the canvas.
            </p>
            <p>Image of arrows between boxes</p>
            <p>
              User can create arrows between boxes by dragging a box on top of
              another. Right clicking on any item opens a context menu through
              which items can be edited or deleted.
            </p>
            <p>Image of help videos</p>
            <p>
              The app has extensive tutorial videos so it is easy to see how it
              works on your own.
            </p>
          </section>
          <section>
            <header>
              <h3 className="text-xl">Technologies</h3>
            </header>
            <p>
              The app was developed completely in ReactJS and CSS. We are
              currently working on a NodeJS REST API to enable: user accounts,
              user collaboration, loading and saving documents, and more.
            </p>
          </section>
        </article>
        <article id="aihio">
          <header>
            <h2 className="text-2xl">Aihio</h2>
          </header>
          <section>
            <a href="https://aihio.org">Site: https://aihio.org</a>
          </section>
          <section>
            <a href="https://github.com/anttihil/flatter">
              Github: https://github.com/anttihil/flatter
            </a>
          </section>

          <section>
            A minimal, modernized message board built on ExpressJS, Pug and
            PostgreSQL.
          </section>
          <section>
            <header>
              <h3 className="text-xl">Description</h3>
            </header>
            <p>
              I have always liked traditional message boards AKA forums. As I
              was learning about servers, I had the idea of learning by doing: I
              decided to build a message board from scratch that runs on NodeJs.
              The second aspect of this moment of inspiration was that
              traditional internet forums have a janky, cluttered user
              interface. With Aihio, I tried to make it flatter and simpler,
              more akin to the familiar, more modern single-page post feed.
            </p>
            <p></p>
          </section>
          <section>
            <header>
              <h3 className="text-xl">Technologies</h3>
            </header>
            <p>
              A message board server built in server side rendering
              architecture. Uses PugJs template engine to render HTML
              dynamically. The database is PostgresSQL, using raw queries that
              are managed by pg-promise library.
            </p>
          </section>
        </article>
      </section>
    </Layout>
  );
};

export default Projects;
