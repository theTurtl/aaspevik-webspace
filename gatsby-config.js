module.exports = {
  siteMetadata: {
    title: `Adrian Aspevik`,
    description: `Mitt navn er Adrian Aspevik, og jeg er en grafisk designer og frontend utvikler basert i Bergen.`,
    author: `@adrianaspevik`,
    image: `src/images/favicon.svg`,
    siteUrl: `https://www.aspevik.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#F5EFEE`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}



