import React from 'react';

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;

`;

const Spinner = styled.div`
border: 4px solid #f3f3f3;
border-top: 4px solid #3498db;
border-radius: 50%;
width: 40px;
height: 40px;
animation: ${spin} 1s linear infinite;
`;


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const Spinners = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  `;

const StyledProgressBar = () => {
  return (
    // <LoaderContainer>
    //   <Spinner />
    // </LoaderContainer>
    <Overlay>
      <Spinners></Spinners>
    </Overlay>
  );
};

export default StyledProgressBar;