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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `project`,
          `category`,
          `tag`,
          `skill`,
          `about`,
          `skill-type`,
          `language`,
          `language-level`,
          `experience`,
          `education`,
          `user`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `robinjnewman`,
        short_name: `robinjnewman`,
        start_url: `/`,
        lang: 'en',
        background_color: `#F3EFE8`,
        theme_color: `#EDDBC1`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
