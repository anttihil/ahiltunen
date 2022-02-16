import React from "react";
import Layout from "../components/Layout";

const Portfolio = () => {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <section>Navigation</section>
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

export default Portfolio;
