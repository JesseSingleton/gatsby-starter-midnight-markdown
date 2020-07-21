import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  font-weight: bold;
  font-size: 0.75em;
  color: #8a8989;
  letter-spacing: 0px;
  margin: 1.5em 0em;

  @media (max-width: ${({ theme }) => theme.dimensions.maxWidthMobile}) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const StyledLink = styled('a')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: #525252;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 1px;

  &:hover {
    filter: unset;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledLink href={'https://github.com/JesseSingleton'}>
      © {new Date().getFullYear()} | Built By J G Singleton
    </StyledLink>
  </StyledFooter>
);

export default Footer;
