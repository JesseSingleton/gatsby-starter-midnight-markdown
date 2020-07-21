import React from 'react';
import styled from 'styled-components';
import { getSiteData } from './hooks/getSiteData';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Underlined from './Underlined';

const StyledBio = styled.div`
  div:first-child {
    display: flex;
    align-items: center;
  }

  a {
    color: ${({ theme }) => theme.color.font};
  }
`;

const SocialLink = styled.a`
  display: inline-block;

  svg {
    height: 1.5em;
    width: 1.5em;
    padding: 0px 10px 0px 0px;

    &:hover {
      filter: unset;
    }
  }
`;

const Bio = () => {
  const { social } = getSiteData();

  return (
    <StyledBio>
      <div>
        <p>
          Full Stack Software Engineer @{' '}
          <Underlined href="https://google.com" text={'Some Company'} />
        </p>
      </div>
      <div>
        <SocialLink href={social.github}>
          <FaGithub title="Github" />
        </SocialLink>
        <SocialLink href={social.linkedin}>
          <FaLinkedin title="LinkedIn" />
        </SocialLink>
      </div>
    </StyledBio>
  );
};

export default Bio;
