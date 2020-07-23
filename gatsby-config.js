/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Midnight Markdown',
    author: 'Jesse George Singleton',
    description: 'A personal blog powered by Gatsby, MDX and Preact',
    social: {
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/'
    },
    siteUrl: 'https://jgsingleton.dev'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['inconsolata:400,700'],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Midnight Markdown',
        short_name: 'GMM',
        start_url: '/',
        background_color: '#1b1f2a',
        theme_color: '#1b1f2a',
        display: 'standalone',
        icon: 'src/favicon.png',
        crossOrigin: 'use-credentials'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-preact'
  ]
};
