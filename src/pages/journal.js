import React from "react";
import { graphql } from "gatsby";
import LightLayout from "../components/layout/LightLayout";
import SEO from "../components/seo";
import { PWL, GridAuto, PortfolioCard } from "../components/grid/grid";

const JournalPage = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <LightLayout>
      <SEO title="Journal" />
      <PWL>
        <h4>Journal Entries</h4>
        <GridAuto>
          {posts.map(({ node: post }) => (
            <article key={post.id}>
            <PortfolioCard
              link={`journal/${post.fields.slug}`}
              image={post.frontmatter.featuredImage.childImageSharp.sizes}
              company={post.frontmatter.title}
              type={post.frontmatter.date}
            />
            </article>
          ))}
        </GridAuto>
      </PWL>
    </LightLayout>
  )
}

export const pageQuery = graphql`
  query blogPage {
    allMdx (
      filter: {
        fields: {
          sourceInstanceName: {eq: "journal"}
        }
      }
      sort: {
        fields: [frontmatter___date], order: DESC
      }
    ){
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            title
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

export default JournalPage