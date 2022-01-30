import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="Carmen, a kitten, not posing on a couch and looking stoically at the camera"
        src="../images/cat.jpeg"
      />
    </Layout>
  );
};

export default AboutPage;
