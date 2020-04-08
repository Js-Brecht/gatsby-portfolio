const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'Mdx') {
        const slug = path.basename(node.fileAbsolutePath, '.mdx')
        const parent = getNode(node.parent);

        createNodeField({
          node,
          name: 'slug',
          value: slug
        })
        createNodeField({
          node,
          name: 'sourceInstanceName',
          value: parent.sourceInstanceName
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx (
        sort: { 
          fields: [frontmatter___company, frontmatter___date]
          order: [ASC, DESC] 
        }
      ){
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
              sourceInstanceName
            }
            frontmatter {
              title
              company
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const allEdges = result.data.allMdx.edges
  const portfolioEdge = allEdges.filter( edge => edge.node.fields.sourceInstanceName === `portfolio` )
  const journalEdge = allEdges.filter( edge => edge.node.fields.sourceInstanceName === `journal` )

  portfolioEdge.forEach(({node}, index ) => {
    createPage({
      path: `/portfolio/${node.fields.slug}`,
      // component: path.resolve(`./src/templates/portfolio.js`),
      component: node.fileAbsolutePath,
      context: {
        id: node.id,
        prev: index === 0 ? null : portfolioEdge[index - 1].node,
        next: index === (portfolioEdge.length - 1) ? null : portfolioEdge[index + 1].node
      },
    })
  })

  journalEdge.forEach(({node}, index ) => {
    createPage({
      path: `/journal/${node.fields.slug}`,
      // component: path.resolve(`./src/templates/journal.js`),
      component: node.fileAbsolutePath,
      context: {
        id: node.id,
        prev: index === 0 ? null : journalEdge[index - 1].node,
        next: index === (journalEdge.length - 1) ? null : journalEdge[index + 1].node
      },
    })
  })
}