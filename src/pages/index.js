import React from 'react';
import { object } from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Bio from '../components/Bio';
import SEO from '../components/Seo';
import PostCard from '../components/PostCard';

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;

const Index = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="All Posts" />
      <Bio />
      {posts.map(({ node, index }) => (
        <PostCard key={index} {...node} />
      ))}
    </Layout>
  );
};

Index.propTypes = {
  data: object,
  location: object
};

export default Index;
