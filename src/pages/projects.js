import React from "react";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
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
      <section className="flex flex-col space-y-4 py-4">
        <article id="argument-studio" className="flex-col flex space-y-2">
          <header>
            <h2 class="text-2xl">Argument Studio</h2>
          </header>
          <a href="http://argumentstudio.com">http://argumentstudio.com</a>
          <section className="">
            Argument studio is a web app made for finding and analyzing
            arguments in PDF documents. It is designed to be a tool for critical
            thinking education. I wrote this app in collaboration with John
            Kardosh. It is under continuous development.
          </section>
          <section className="flex flex-col space-y-1">
            <header>
              <h3 className="text-xl ">Description</h3>
            </header>
            <p>
              At its current stage, Argument Studio has two main modules which
              are rendered on two canvases: one is used to highlight texts and
              the other to construct argument diagrams based on the former. The
              user can switch between the modules quickly, enabling a natural
              work flow.
            </p>
            <Figure
              caption="PDF Highlighting module"
              image={
                <StaticImage
                  src="../images/highlights.jpg"
                  alt="PDF Highlighting module"
                />
              }
            />
            <p>
              In the first "highlight" module, the user highlights text from a
              PDF document which they have loaded from their filesystem or
              Internet. Those highlights are collected into the sidebar.
            </p>
            <Figure
              caption="Highlight boxes on diagramming canvas"
              image={
                <StaticImage
                  src="../images/boxes.jpg"
                  alt="Highlight boxes on diagramming canvas"
                />
              }
            />
            <p>
              In the second "diagram" module, the user can boxes by dragging
              highlights from the sidebar onto the diagramming canvas.
            </p>
            <Figure
              caption="Arrows and boxes on diagramming canvas"
              image={
                <StaticImage
                  src="../images/boxes-arrows.jpg"
                  alt="Arrows and boxes on diagramming canvas"
                />
              }
            />
            <p>
              By dragging a box onto another, an arrow appears between them. It
              is easy and quick to create representations of directed
              relationships like inferences. Right clicking on any item opens a
              context menu through which items can be edited or deleted. The
              arrows change their position and length dynamically when the boxes
              are moved. Re-arranging a diagram is fairly effortless.
            </p>
            <Figure
              caption="Arrows and boxes on diagramming canvas"
              image={
                <StaticImage
                  src="../images/boxes-arrows.jpg"
                  alt="Arrows and boxes on diagramming canvas"
                />
              }
            />
            <figure>
              <StaticImage src="../images/tutorial.jpg" />
              <figcaption className="text-xs font-serif">
                Tutorial videos
              </figcaption>
            </figure>
            <p>
              Images do not show how fluid the diagramming functionality is in
              practice. The app has extensive tutorial videos so it is easy to
              see how it works on your own. Try it out!
            </p>
          </section>
          <section>
            <header>
              <h3 className="text-xl">Technologies</h3>
            </header>
            <p>
              The app was written in ReactJS and CSS. We are currently working
              on a NodeJS REST API to enable: user accounts, user collaboration,
              loading and saving documents, and more.
            </p>
          </section>
        </article>
        <article id="aihio" className="flex-col flex space-y-2">
          <header>
            <h2 className="text-2xl">Aihio</h2>
          </header>
          <section>
            <p>
              <a href="https://aihio.org">https://aihio.org</a>
            </p>
            <p>
              <a href="https://github.com/anttihil/flatter">
                Github: https://github.com/anttihil/flatter
              </a>
            </p>
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
              The deployed site, Aihio, is directed at miniature crafts
              hobbyists, because like many niche hobby communities, the
              miniature crafts community relies largely on huge social media
              platforms such as Facebook. Part of my original motive was to
              develop a small, independent site whose layout and usability
              borrows from modern social media apps, especially how well they
              handle the user experience on mobile devices. I have always liked
              traditional message boards AKA forums as repositories of valuable
              niche expertise, but I'm bothered by their janky, cluttered user
              interfaces.
            </p>
            <p>
              The Github repo "flatter" (the public, clonable version of the
              site) can be set up as for any topic or theme with only minor
              modifications in the config files. It replaces the usual
              hierarchical user interface with a flatter one (hence, the repo's
              name: "flatter"), more akin to the familiar single-page feed of
              social media posts.
            </p>
            <p>
              The second main motive of this project was self-learning: I could
              have used a pre-packaged forum software but building a
              full-featured message board from scratch presented an oppurtunity
              to learn about servers, application security, and databases.
              Despite my original impetus sourced in minimal user experience, I
              quickly realized that a message board is a thin user interface for
              a database, mediated by a REST API.
            </p>
            <Figure
              caption="Arrows and boxes on diagramming canvas"
              image={
                <StaticImage
                  src="../images/boxes-arrows.jpg"
                  alt="Arrows and boxes on diagramming canvas"
                />
              }
            />
            <figure className="flex flex-col items-center">
              <StaticImage
                src="../images/aihio-main.png"
                alt="Message board main page"
              />
              <figcaption className="text-xs font-serif">
                Message board main view
              </figcaption>
            </figure>
            <p>
              The main view of the message board filters the posts based on the
              board selected from the links on the sidebar, sorts the actively
              commented ones first. Currently, I have not implemented a sorting
              method button or pagination for posts but the required logic is
              already implemented at the database level.
            </p>
            <Figure
              caption="Arrows and boxes on diagramming canvas"
              image={
                <StaticImage
                  src="../images/boxes-arrows.jpg"
                  alt="Arrows and boxes on diagramming canvas"
                />
              }
            />
            <figure className="flex flex-col items-center">
              <StaticImage
                src="../images/post-view.png"
                alt="Message board main page"
              />
              <figcaption className="text-xs font-serif">
                A view of an individual post
              </figcaption>
            </figure>
            <p>
              When you click you on a post in the main view, an individual post
              is opened. The main functionality here is simplicity of the
              layout. Visual space is efficiently and cleanly. Commenting and
              editing buttons are small, and only visible if you have the user
              authentication and authorization status to use them. The comments
              have little links which navigate to the cited post and the link
              text names the cited user. This navigation behavior makes it easy
              to keep track of multiple, separate threads of discussion without
              needing to introduce visual cues of parent-child relations among
              comments, such as indentation. Indentation is visually powerful,
              but after a few of levels it starts quickly to take up screen
              space, creating an unwieldy mobile user experience.
            </p>
            <Figure
              caption="Arrows and boxes on diagramming canvas"
              image={
                <StaticImage
                  src="../images/boxes-arrows.jpg"
                  alt="Arrows and boxes on diagramming canvas"
                />
              }
            />
            <figure className="flex flex-col items-center">
              <StaticImage
                src="../images/mobile.png"
                alt="Mobile navigation menu"
              />
              <figcaption className="text-xs font-serif">
                Mobile navigation menu
              </figcaption>
            </figure>
            <p>
              Putting mobile users first was one of my main design concerns with
              this site. Traditionally, message boards are not mobile friendly,
              in part because it is difficult to navigate from one board to
              another, and further because the posts have an awkward layout.
              Aihio solves the layout problem by using a vertical feed of cards
              with tight use of screen space. The navigation problem is solved
              by a hideable navigation menu, pictured above.
            </p>
          </section>
          <section>
            <header>
              <h3 className="text-xl">Technologies</h3>
            </header>
            <p>
              A message board server built in server side rendering
              architecture. Uses PugJs template engine to render HTML
              dynamically. The database is PostgresSQL, using raw queries (as
              opposed to an object-relational mapping).
            </p>
          </section>
        </article>
      </section>
    </Layout>
  );
};

export default Projects;
