import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading2, Button } from '../~common';

const Wrapper = styled.section`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PhotoWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Photo = styled.div`
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background: #eaeaea;
    overflow: hidden;
`;

const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function PhotoSection({ user = 'Person Pearson', job = 'Developer', src = 'https://milan.serverlessdays.io/speakers/guillermo-rauch.jpg' }) {
  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo>
          <img src={src} alt="" height="100%" />
        </Photo>
      </PhotoWrapper>
      <TextWrapper>
        <Heading2>{user}</Heading2>
        <p>{job}</p>
      </TextWrapper>
      <ButtonWrapper>
        <Button small primary>Connect</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

PhotoSection.propTypes = {
  job: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default PhotoSection;
