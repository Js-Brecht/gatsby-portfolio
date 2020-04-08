import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import DarkLayout from "../components/layout/DarkLayout"
import SEO from "../components/seo";
import { PWD, GridTwo } from "../components/grid/grid";

import "../styles/pages.scss"

const AboutPage = (props) => {
  return (
    <DarkLayout>
      <SEO title="About" />
      <PWD>
        <GridTwo>
          <div><h1>Hello! I'm Alan.</h1></div>
          <div className="about-block">
            <p>I'm a full stack designer based in San Francisco. My capabilities include art direction, design systems, UX research, motion design and front end development.</p>
            <p>I'm passionate about integrating technology with real world applications to better enrich and serve our lives.</p>
            <p>When I'm not designing, I'm ripping down mountains on my snowboard, making a mess in the kitchen and taking photos with my camera.</p>
          </div>
          <Img fluid={props.data.about2.childImageSharp.fluid} alt="Snowboarding Selfie" />
          <Img fluid={props.data.about1.childImageSharp.fluid} className="right" alt="Color Factory Design Team Bonding" />
          <Img className="right" fluid={props.data.about3.childImageSharp.fluid} alt="Sony Birthday Initiation" />
        </GridTwo>
      </PWD>
    </DarkLayout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    about1: file(relativePath: { eq: "about1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about2: file(relativePath: { eq: "about2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about3: file(relativePath: { eq: "about3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`