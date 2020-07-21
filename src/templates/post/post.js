import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import Tags from '../../components/Tags';

const NavigationLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0px;

  a {
    text-decoration: unset;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.font};
    padding: 0.25em 0em;
    width: 95%;
    justify-content: space-between;

    svg {
      width: 19px;
      height: 19px;
    }
  }
`;

const Date = styled.small`
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
  text-transform: uppercase;
  display: block;
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;

const PostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h3>{post.frontmatter.title}</h3>
      <Date>{post.frontmatter.date}</Date>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Tags categories={post.frontmatter.tags} />
      <NavigationLinks>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              <FaAngleDoubleLeft />
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              <FaAngleDoubleRight />
            </Link>
          )}
        </li>
      </NavigationLinks>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
};

export default PostTemplate;
