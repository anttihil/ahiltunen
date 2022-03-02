import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>Antti Hiltunen -- About Me</title>
        <meta
          name="description"
          content="A short advertisement about myself. Web developer, self-learner, PhD."
        />
      </Helmet>
      <div className="grid pt-10 scroll-pt-10">
        <StaticImage
          style={{
            gridArea: "1/1",
            background: "black",
          }}
          layout="constrained"
          imgStyle={{ opacity: 0.2 }}
          alt=""
          src={"../images/forest-banner.webp"}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
          }}
          className="flex items-center"
        >
          <h1 className="pl-6 md:pl-48 text-4xl md:text-6xl text-black">
            About Me
          </h1>
        </div>
      </div>
      <article className="flex flex-col space-y-4 py-8 px-6 md:px-48">
        <p>
          I'm a full stack web developer who is motivated by making complex
          things simple. An autodidact in many respects. Independent-minded.
        </p>
        <p>
          I can pick up a new technology or framework quickly if my project's
          nature requires it. I learned ReactJS, CSS, and HTML Canvas while
          working on Argument Studio (a highlighting & diagramming app). I
          picked up the fundamentals of NodeJS, PostgreSQL, AWS S3, user
          authentication, app security, REST API server architecture, networking
          and so on. Currently, I'm looking into starting a web design business
          as a side-project which is why I'm learning about JAMstack.
        </p>
        <p>
          Before I embarked on my journey in web development, I taught
          philosophy for two years at UCLA. I have a PhD in a topic which I find
          interesting but I decided back then that academia is not my true path.
          My background affords me a flexible toolbox of skills that go beyond
          the merely technical: I'm good at explaining and simplifying abstract
          concepts, I'm not afraid of public speaking, and I'm comfortable about
          receiving and giving constructive feedback. I'm very accustomed to
          grappling with ways of thinking which differ from mine.
        </p>
      </article>
    </Layout>
  );
};

export default About;
