/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getProjects = makeRequest(graphql, `
    {
      allStrapiProject {
        nodes {
          slug
          Title
          Subtitle
          Description {
            Heading
            Paragraph
            Alignment
            CaptionedImage {
              Image {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    aspectRatio
                    srcWebp
                    srcSetWebp
                    originalName
                  }
                }
              }
              Caption
            }
          }
          GitHubLink
          ProjectLink
          Year
          tags {
            Name
          }
          categories {
            Name
          }
          Cover {
            childImageSharp {
              fluid(fit: COVER) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiProject.nodes.forEach((node) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/components/templates/ProjectPage.js`),
        context: {
          project: node
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getProjects;
};
