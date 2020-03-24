import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  border-bottom: 1px solid #dddddd;
`;

export const Linkz = styled(Link)`
  color: ${(props) => (props.current ? '#444444' : '#999999')};
  font-size: 15px;
  font-weight: bold;
  transition: all 0.8s ease-out;

  & + a {
    margin-left: 20px;
  }

  &:hover {
    color: #444444;
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${(props) => props.ativo && 0};
  nav {
    display: flex;
    align-items: center;

    img {
      width: 135px;
      height: 26px;
      transition: all 0.5s ease-out;

      &:hover {
        filter: brightness(200%);
      }
    }

    div {
      margin-left: 30px;
      padding-left: 30px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-left: 1px solid #dddddd;
    }
  }

  aside {
    display: flex;
    flex-direction: column;

    a {
      &:nth-of-type(1) {
        color: #666666;
        font-weight: bold;
        font-size: 14px;
      }
      &:nth-of-type(2) {
        color: #de3b3b;
        margin-top: 10px;
        font-size: 14px;
      }
      & + a {
        margin-left: 0;
      }
    }
  }
`;
