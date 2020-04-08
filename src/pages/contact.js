import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image";

import DarkLayout from "../components/layout/DarkLayout";
import SEO from "../components/seo";
import { PWD, GridWall } from "../components/grid/grid";
import Form from "../components/form/form";

const ContactPage = (props) => {
  return (
    <DarkLayout>
      <SEO title="Contact" />
      <PWD>
        <GridWall>
          <Img fluid={props.data.contact.childImageSharp.fluid} alt="Lantern Festival" />
          <Form />
        </GridWall>
      </PWD>
    </DarkLayout>
  )
}

export default ContactPage

export const query = graphql`
  query {
    contact: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`