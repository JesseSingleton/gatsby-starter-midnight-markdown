import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';

const StyledTags = styled.div`
  display: flex;
`;

const Tag = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.color.accent};
  font-size: 11px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 0px 10px 0px 0px;
`;

const Tags = ({ categories }) => (
  <StyledTags>
    {categories.map(category => (
      <Tag key={category}>{category}</Tag>
    ))}
  </StyledTags>
);

Tags.propTypes = {
  categories: array.isRequired
};

export default Tags;
