import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UnderlinedLink = styled.a`
  text-decoration: unset;
  box-shadow: inset 0 -0.2rem 0 #77cbff;
  color: ${({ theme }) => theme.color.font};

  &:hover {
    transition: box-shadow 0.3s ease-out;
    box-shadow: rgb(228, 63, 90) 0px -2rem 0px inset;
  }
`;

const Underlined = ({ href, text }) => (
  <UnderlinedLink href={href}>{text}</UnderlinedLink>
);

Underlined.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Underlined;
