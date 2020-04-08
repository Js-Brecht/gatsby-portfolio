import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import LightLayout from "../components/layout/LightLayout";
import { PWL, GridTwo } from "../components/grid/grid";
import PostHeader from "../components/posts/portfolio/intro";

import templateStyles from "./template.module.scss";
import "../styles/pages.scss";

const shortcodes = { GridTwo } // Provide common components here

const JournalPage = ({ data: { mdx }, pageContext }) => {
  const { prev, next } = pageContext
  return (
    <LightLayout>
      <PWL>
        <PostHeader
          company={mdx.frontmatter.title}
          type={mdx.frontmatter.date}
          intro={mdx.frontmatter.intro}
        />
        <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <footer className={templateStyles.footer}>
          <div className={templateStyles.footerWrapper}>
            <div className={templateStyles.footerLeft}>
              {prev &&
                <Link className={templateStyles.footerLink} to={`/journal/${prev.fields.slug}`}>
                  <div className={templateStyles.subhead}>&larr; Newer Post</div>
                  <div className={templateStyles.dark}>{prev.frontmatter.title}</div>
                </Link>
              }
            </div>
            <div className={templateStyles.footerRight}>
              {next &&
                <Link className={templateStyles.footerLink} to={`/journal/${next.fields.slug}`}>
                  <div className={templateStyles.subhead}>Previous Post &rarr;</div>
                  <div className={templateStyles.dark}>{next.frontmatter.title}</div>
                </Link>
              }
            </div>
          </div>
        </footer>
      </PWL>
    </LightLayout>
  )
}

export default JournalPage

export const pageQuery = graphql`
  query JournalPostQuery($id: String) {
    mdx(id: { eq: $id } ) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        intro
      }
    }
  }
`