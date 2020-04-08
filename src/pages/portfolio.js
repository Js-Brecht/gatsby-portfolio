import React from "react";
import { graphql } from "gatsby";
import DarkLayout from "../components/layout/DarkLayout";
import SEO from "../components/seo";
import { PWD, GridAuto, PortfolioCard } from "../components/grid/grid";  

const PortfolioPage = ({ data }) => {
  const { edges: portfolios } = data.allMdx
  return (
    <DarkLayout>
      <SEO title="Portfolio" />
      <PWD>
        <h4>All Portfolio Work</h4>
        <GridAuto>
          {portfolios.map(({ node: portfolio }) => (
            <article key={portfolio.id}>
            <PortfolioCard
              link={`portfolio/${portfolio.fields.slug}`}
              image={portfolio.frontmatter.featuredImage.childImageSharp.sizes}
              company={portfolio.frontmatter.company}
              type={portfolio.frontmatter.type}
            />
            </article>
          ))}
        </GridAuto>
      </PWD>
    </DarkLayout>
  )
}

export const pageQuery = graphql`
  query PortfolioPage {
    allMdx (
      filter: {
        fields: {
          sourceInstanceName: {eq: "portfolio"}
        }
      }
      sort: {
        fields: [frontmatter___company], order: ASC
      }
    ){
      edges {
        node {
          id
          frontmatter {
            company
            role
            type
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 1600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PortfolioPage