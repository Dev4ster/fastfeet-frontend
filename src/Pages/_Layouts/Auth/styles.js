import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  padding: 60px 30px;
  border-radius: 4px;

  img {
    width: 253px;
    height: 44px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      font-size: 14px;
      font-weight: bold;
      color: #444444;
      margin-bottom: 10px;
    }

    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #999999;
      margin: 0 0 20px;
      font-size: 16px;
      border: 1px solid #dddddd;
      &::placeholder {
        color: #999999;
        font-size: 16px;
      }
    }
    span {
      color: red;
      align-self: center;
      margin: 0 0 5px;
      font-size: 12px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#7d40e7')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
