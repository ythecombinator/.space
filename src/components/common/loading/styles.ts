import {keyframes} from '@emotion/core';

import styled, {getColorScheme} from 'utils/styles';

interface Props {
  isDark: boolean;
}

// Keyframes

const rotate1 = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;

const rotate2 = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;

const rotate3 = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;

// Components

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const ChildrenContainer = styled.div`
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
`;

const Stroke = styled.div<Props>`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Stroke1 = styled(Stroke)<Props>`
  left: 0%;
  top: 0%;
  animation: ${rotate1} 1s linear infinite;
  border-bottom: 3px solid ${(props) => getColorScheme(props.isDark).stroke1};
`;

export const Stroke2 = styled(Stroke)<Props>`
  right: 0%;
  top: 0%;
  animation: ${rotate2} 1s linear infinite;
  border-right: 3px solid ${(props) => getColorScheme(props.isDark).stroke2};
`;

export const Stroke3 = styled(Stroke)`
  right: 0%;
  bottom: 0%;
  animation: ${rotate3} 1s linear infinite;
  border-top: 3px solid ${(props) => getColorScheme(props.isDark).stroke3};
`;
