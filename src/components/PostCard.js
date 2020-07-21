import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Tags from './Tags';

const Title = styled.h3`
  box-shadow: none;
  margin-bottom: 0em;
`;

const Date = styled.small`
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
  text-transform: uppercase;
`;

const PostCard = ({ frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug;
  const description = frontmatter.description || excerpt;

  return (
    <>
      <Title>
        <Link to={fields.slug}>{title}</Link>
      </Title>
      <Date>{frontmatter.date}</Date>
      <p>{description}</p>
      <Tags categories={frontmatter.tags} />
    </>
  );
};

PostCard.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array
  }),
  fields: PropTypes.shape({
    slug: PropTypes.string
  }),
  timeToRead: PropTypes.number,
  excerpt: PropTypes.string
};

export default PostCard;
