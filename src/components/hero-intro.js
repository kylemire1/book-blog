import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero-bg.png" }) {
        childImageSharp {
          fixed(
            width: 924
            traceSVG: { background: "#fff", color: "#663399" }
          ) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <>
      <section className='container hero'>
        <div className='intro-text'>
          <h1>We Review Books</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>
          <Link to='/all-reviews' className='btn btn-bg'>
            Take Me There
          </Link>
        </div>
      </section>
      <Img
        className='hero-bg'
        aria-hidden='true'
        alt=''
        fixed={data.file.childImageSharp.fixed}
      />
    </>
  );
};

export default Hero;
