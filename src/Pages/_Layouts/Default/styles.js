import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const fadeAnimation = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

const pulseAnimation = keyframes`
  from {
    transform:scale(0.9);
  }

  to {
    transform:scale(1);
  }
`;
export const Wrapper = styled.div`
  background: #f5f5f5;

  table,
  td,
  th {

    border: none !important;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 1em;
    width: 100%;

    thead {
      tr {
        th {
          color: #444444;
          font-weight: bold;
          font-size: 16px;
          padding-bottom: 15px;
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        &:hover {
          td {
          }
        }
        td {
          text-align: center;
          background: #fff;
          border: none;
          padding: 15px 0;
          border-collapse: none;
          color: #666666;
          font-size: 15px;
          position: relative;
          margin-bottom: 20px;
          user-select: none;
          box-shadow: 1px 1px 1px rgb(218, 218, 218);

          transition: all 0.3s ease-out;
          &:first-of-type {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }

          &:last-of-type {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }

          svg {
            cursor: pointer;
            transition: transform 0.2s ease-out;

            &:active {
              transform: translateY(2px);
            }
          }

          ul {
            position: absolute;
            padding: 20px 10px;
            background: #fff;
            width: 150px;
            right: calc(50% - 75px);
            border-radius: 4px;
            z-index: 99;
            filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
            user-select: none;
            /* animation: ${fadeAnimation} 0.5s ease-out; */
            @media (max-width: 1440px) {
              right: 0;
            }
            li {
              font-size: 16px;
              color: #999999;
              display: flex;
              flex: 1;
              align-items: center;
              cursor: pointer;

              button {
                background:none;
                border:none;
                color:#999999;
                padding:0;

                &:hover {
                  background: none;
                  color:#2E2D2D;
                  svg {
                    filter: brightness(120%);
                    animation: ${pulseAnimation} 0.5s infinite linear;
                  }
                }

              }

              svg {
                margin-right: 10px;
              }

              & + li {
                padding-top: 10px;
                margin-top: 10px;
                border-top: 1px solid #eeeeee;
              }
            }

            &:before {
              content: '';
              position: absolute;
              left: calc(50% - 7px);
              top: -10px;
              width: 0;
              height: 0;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-bottom: 10px solid #fff;
              filter: drop-shadow(0px -2px 1px rgba(0, 0, 0, 0.1));

              @media (max-width: 1440px) {
                left: calc(50% + 13px);
              }
            }
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
`;
export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 15px;
  margin: 40px auto 0px;

  h1 {
    color: #444444;
    font-size: 24px;
    font-weight: bold;
  }

  > div > section {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    small {
      position: absolute;
      bottom: -20px;
      left: 0;
      max-width: 600px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    input {
      padding: 8px 20px 8px 40px;
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;

      &::placeholder {
        color: #999999;
        font-size: 14px;
      }
    }

    > span {
      position: relative;

      svg {
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }

    button {
      background: #7d40e7;
      border: 1px solid #dddddd;
      padding: 6px 15px;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 14px;
      border-radius: 4px;
      font-weight: bold;

      transition: all 0.2s ease-out;

      &:active {
        transform: translateY(2px);
      }
      &:hover {
        background: ${darken(0.2, '#7d40e7')};
      }
    }
  }

  > section {
    min-height: 506px;
    width: 100%;
  }
`;
