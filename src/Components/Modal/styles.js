import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;
export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999;
  cursor: pointer;
  animation: ${fadeAnimation} 0.3s ease-out;
`;

export const Content = styled.div`
  background: #fff;
  max-width: 450px;
  max-height: 380px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 30px 20px;
  color: #444444;
  animation: ${fadeAnimation} 0.8s ease-out;
  cursor: initial;
  hr strong {
    font-size: 14px;
    margin-bottom: 10px;
    display: block;
  }

  address {
    font-size: 16px;
  }

  hr {
    margin: 10px auto;
  }

  img {
    height: 50px;
    display: block;
    margin: 10px auto;
    cursor: pointer;
  }
`;
