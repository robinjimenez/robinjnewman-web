require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `robinjnewman`,
    subtitle: {
      first_line: `I enjoy coding to bring`,
      second_line: `great designs to life.`,
    },
    description: `Front-end developer. I enjoy coding to bring great designs to life.`,
    author: `@nyiuman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },*/
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`project`, `category`, `tag`, `user`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
