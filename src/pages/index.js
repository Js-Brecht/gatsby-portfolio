import React from "react";
import { graphql } from "gatsby";
import DarkLayout from "../components/layout/DarkLayout";
import SEO from "../components/seo";

import { PWD, GridGallery, FeaturedSmall, FeaturedLarge } from "../components/grid/grid";

const IndexPage = (props) => {
  return (
    <DarkLayout>
      <SEO title="Home" />
      <PWD>

        <h4>Featured Projects</h4>
        <GridGallery>
          <FeaturedSmall 
            link={`portfolio/ezev`}
            image={props.data.featured2.childImageSharp.sizes}
            title="EZ EV"
          />

          <FeaturedSmall 
            link={`portfolio/firstamerican`}
            image={props.data.featured3.childImageSharp.sizes}
            title="First American"
          />

          <FeaturedLarge 
            link={`portfolio/deltadental`}
            image={props.data.featured1.childImageSharp.sizes}
            title="Delta Dental"
          />

          <FeaturedSmall
            link={`portfolio/galls`}
            image={props.data.featured4.childImageSharp.sizes}
            title="Galls"
          />

          <FeaturedSmall
            link={`portfolio/deltadental`}
            image={props.data.featured1.childImageSharp.sizes}
            title="Delta Dental"
          />
        </GridGallery>

        <h4>Some Random CodePens I Made</h4>

      </PWD>
    </DarkLayout>
  )
}
  
export default IndexPage

export const query = graphql`
  query {
    featured1: file(relativePath: { eq: "featured1.png" }) {
      childImageSharp {
        sizes(maxWidth: 1600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    featured2: file(relativePath: { eq: "featured2.png" }) {
      childImageSharp {
        sizes(maxWidth: 1600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    featured3: file(relativePath: { eq: "featured3.png" }) {
      childImageSharp {
        sizes(maxWidth: 1600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    featured4: file(relativePath: { eq: "featured4.png" }) {
      childImageSharp {
        sizes(maxWidth: 1600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`