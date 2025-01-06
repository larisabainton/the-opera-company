require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `The Opera Company`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": "w4c79ak6jyky"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/logo.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "assets",
      "path": "./src/assets/"
    },
    __key: "assets"
  }, {
    resolve: "gatsby-omni-font-loader",
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [{
        name: "DM Serif Text",
        file: 'https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap'
      }]
    }
    
  },
]
};