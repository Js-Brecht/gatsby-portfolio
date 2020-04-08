import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import DarkLayout from "../components/layout/DarkLayout";
import { PWD, GridTwo, ImageContainer } from "../components/grid/grid";
import PostHeader from "../components/posts/portfolio/intro";

import templateStyles from "./template.module.scss";
import "../styles/pages.scss";

const shortcodes = { GridTwo, ImageContainer } // Provide common components here

const ProjectPage = ({ data: { mdx }, pageContext }) => {
  const { prev, next } = pageContext
  return (
    <DarkLayout>
      <PWD>
        <PostHeader 
          company={mdx.frontmatter.company}
          role={mdx.frontmatter.role}
          type={mdx.frontmatter.type}
          intro={mdx.frontmatter.intro}
        />
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <footer className={templateStyles.footer}>
          <div className={templateStyles.footerWrapper}>
            <div className={templateStyles.footerLeft} >
              {prev &&
                <Link className={templateStyles.footerLink} to={`/portfolio/${prev.fields.slug}`}>
                  <div className={templateStyles.subhead}>&larr; Previous Project</div>
                  <div className={templateStyles.light}>{prev.frontmatter.company}</div>
                </Link>
              }
            </div>
            <div className={templateStyles.footerRight}>
              {next &&
                <Link className={templateStyles.footerLink} to={`/portfolio/${next.fields.slug}`}>
                  <div className={templateStyles.subhead}>Next Project &rarr;</div>
                  <div className={templateStyles.light}>{next.frontmatter.company}</div>
                </Link>
              }
            </div>
          </div>
        </footer>
      </PWD>
    </DarkLayout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query PortfolioPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        company
        role
        type
        intro
      }
    }
  }
`