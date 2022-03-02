import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Antti Hiltunen -- Professional Website</title>
        <meta
          name="description"
          content="Full-stack web developer, curious person. "
        />
      </Helmet>
      <div
        className="pt-10 scroll-pt-10"
        style={{ display: "grid", height: "100vh" }}
      >
        <StaticImage
          style={{
            gridArea: "1/1",
          }}
          layout="constrained"
          alt=""
          src={"../images/dim-city.webp"}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
          }}
          className="place-items-center flex flex-col md:flex-row items-center px-6 py-8 md:pr-0 md:pl-48"
        >
          <article className="text-orange-50 space-y-4">
            <h2 className="text-xl md:text-2xl mb-6">
              Full-stack web developer
            </h2>
            <p>
              A background in education. I'm dedicated to teaching myself new
              things every day.
            </p>
            <p>
              Technologies:
              <br />
              JavaScript, TypeScript, ReactJS, NodeJS, PostgreSQL, <br />
              HTML, CSS, Bootstrap, TailwindCSS, HTML Canvas
            </p>

            <ul>
              Contact Me:
              <li>antti@ahiltunen.com</li>
              <li>
                <a
                  href="https://github.com/anttihil"
                  className="text-orange-300"
                >
                  <u>github.com/anttihil</u>
                </a>
              </li>
            </ul>

            <ul className="space-y-2">
              Latest projects:
              <li>
                <a href="http://argumentstudio.com" className="text-orange-300">
                  <u>argumentstudio.com</u>
                </a>{" "}
                <br />
                <span>
                  {">"} An educational web app for finding and analyzing
                  arguments in PDF text files (larger displays only)
                </span>
              </li>
              <li>
                <a href="https://aihio.org" className="text-orange-300">
                  <u>aihio.org</u>
                </a>
                <br />
                <span>
                  {">"}A message board app built with NodeJS (mobile friendly)
                </span>
              </li>
            </ul>
          </article>
          <section className="mt-8 md:mt-0 md:ml-8 flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 items-center ">
            <Link
              className="border-2 rounded p-2 text-orange-300 hover:text-blue-400 font-space border-white"
              to="/projects"
              onMouseOver={handleLinkOver}
              onMouseLeave={handleLinkLeave}
            >
              Project Details
            </Link>
            <i
              className={arrowHover ? arrowRightHoverStyle : arrowRightStyle}
            />
            <i className={arrowHover ? arrowDownHoverStyle : arrowDownStyle} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
