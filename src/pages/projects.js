import React from "react";
import Layout from "../components/Layout";
import Figure from "../components/Figure";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <Layout>
      <Helmet>
        <title>Antti Hiltunen -- Project Portfolio</title>
        <meta
          name="description"
          content="Short descriptions of my latest projects."
        />
      </Helmet>
      <div className="grid pt-10 scroll-pt-10">
        <StaticImage
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          alt=""
          src={"../images/welder-banner-dimmer-downscaled.webp"}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
          }}
          className="flex items-center"
        >
          <h1 className="pl-6 md:pl-48 text-4xl md:text-6xl text-amber-100">
            Projects
          </h1>
        </div>
      </div>
      <section className="flex flex-col space-y-16 py-8 px-6 md:px-48">
        <article id="argument-studio" className="flex-col flex space-y-8">
          <header>
            <h2 className=" text-3xl">ArgumentStudio</h2>
          </header>
          <section>
            <p>
              ArgumentStudio is a web app made for finding and deconstructing
              arguments in PDF documents, e.g. scholarly papers. It's designed
              to be used as an aid for critical thinking education. I wrote this
              app in collaboration with John Kardosh. Works best with larger
              than smartphone size displays.
            </p>
            <br />
            Site:
            <br />
            <a href="http://argumentstudio.com" className="text-amber-700">
              <u>argumentstudio.com</u>
            </a>
          </section>
          <section className="flex flex-col space-y-4">
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
              In the highlighting module (depicted above), a user can highlight
              text from a PDF document which they have loaded from their
              computer's filesystem or from remote URL. Highlights have
              optionally a user-defined category and color. The highlights are
              collected into the sidebar and sorted according to their page
              locations and categories. Highlights can be deleted via the
              context menu opened by a right-click.
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
              In the diagramming module (see above), the user can create boxes
              by dragging highlights from the sidebar onto an empty canvas.
            </p>
            <p>
              When a box is dragged onto another box, an arrow appears between
              them. This makes it effortless to create representations of
              directed relationships, such as logical inferences or causal
              relationships. Right clicking on any item opens a context menu
              through which items can be edited or deleted. The arrows change
              their position and length dynamically when the boxes are moved.
              Re-arranging a diagram is easy.
            </p>
          </section>
          <section className="space-y-4">
            <header>
              <h3 className="text-xl">Technologies</h3>
            </header>
            <p>
              The app was written in TypeScript, ReactJS and CSS. We are
              currently working on a NodeJS REST API to enable: user accounts,
              user collaboration, loading and saving documents, and more.
            </p>
          </section>
        </article>
        <article id="aihio" className="flex-col flex space-y-8">
          <header>
            <h2 className="text-3xl">Aihio</h2>
          </header>
          <section className="space-y-4">
            <p>
              A sleek message board built with ExpressJS, Pug and PostgreSQL.
              Mobile friendly.
            </p>
            <p>
              Site:
              <br />
              <a href="https://aihio.org" className="text-amber-700">
                <u>https://aihio.org</u>
              </a>
            </p>
            <p>
              Github:
              <br />
              <a
                href="https://github.com/anttihil/flatter"
                className="text-amber-700"
              >
                <u>https://github.com/anttihil/flatter</u>
              </a>
            </p>
          </section>
          <section className="space-y-4">
            <header>
              <h3 className="text-xl">Description</h3>
            </header>
            <Figure
              caption="Message board main view"
              image={
                <StaticImage
                  src="../images/aihio-main.png"
                  alt="Message board main view"
                />
              }
            />
            <p>
              I value traditional message boards (forums) as repositories of
              valuable expertise on niche topics. Nevertheless, I'm bothered by
              their janky, cluttered user interfaces. As a learning project, I
              decided to build a small, independent community message board for
              one of my hobbies, miniature crafts. Its layout and usability
              would borrow from modern social media apps, especially their user
              experience on mobile devices.
            </p>
            <p>
              Building a full-featured message board from scratch (as opposed to
              deploying an existing forum software) was a great opportunity to
              learn about servers, application security, and databases. When I
              started to work on this project, I quickly realized that a message
              board is really just a thin user interface for a database,
              mediated by a REST API.
            </p>
          </section>
          <section className="space-y-4">
            <header>
              <h3 className="text-xl">Technologies</h3>
            </header>
            <p>
              ExpressJS, PostgreSQL, AWS, nodeSharp, Pug, TailwindCSS,
              MailerSend
            </p>
            <p>
              The client in this project is quite thin: PugJS template engine
              with some JS files to add a bit of interactivity to pages. Most of
              the intricacy is in the NodeJS (Express) server app.
            </p>
            <p>
              I spent a lot of my focus to learn about and implement adequate
              security features: All HTTP POST routes are CSRF protected. All
              user input is validated and sanitized to prevent XSS attacks,
              which is obviously very important for a message board.
            </p>
            <p>
              User authentication and authorization are robust for the size of
              the app: The app implements server side sessions with secure
              cookies, user authentication. User accounts are verified and
              passwords recovered via automated email service. Every route has
              specific user authorization to prevent users from accessing
              resources of other users (either of admin users or other users
              with similar privileges.)
            </p>
            <p>
              On the database level, user passwords are hashed with Argon2
              algorithm and queries are protected from SQL injections.
            </p>
            <p>
              All crucial activity of the server app and also any errors are
              logged into automatically rotating files, so that if any problem
              arises it can can be diagnosed and located quickly.
            </p>
            <p>
              I learned a bit about security in networking as well: the server
              sits behind two reverse proxies.
            </p>
            <p>
              The second main area I focused on in this project was the design
              and implementation of PostgreSQL databases and more generally,
              storing data. I opted out of using an object-relational mapping
              framework, and wrote raw SQL queries instead. At the end of the
              project, I was comfortable with the SQL way of thinking. User
              uploaded images are processed by the server and also uploaded to
              an AWS S3 storage which serves the images faster from a CDN. The
              database holds only a record of the uploaded images.
            </p>
          </section>
        </article>
      </section>
    </Layout>
  );
};

export default Projects;
