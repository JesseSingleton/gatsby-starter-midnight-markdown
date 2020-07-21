import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getSiteData } from './hooks/getSiteData';

const StyledHeader = styled.div`
  display: flex;
  padding: 0 25px;
`;

const SiteTitle = styled.h1`
  text-transform: uppercase;
  text-decoration: unset;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.font};
`;

const Header = () => {
  const { title } = getSiteData();

  return (
    <StyledHeader>
      <SiteTitle>
        <Link to={'/'}>{title}</Link>
      </SiteTitle>
    </StyledHeader>
  );
};

export default Header;
