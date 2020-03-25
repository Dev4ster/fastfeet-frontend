import styled from 'styled-components';
import { darken } from 'polished';

export const Status = styled.span`
  background: ${(props) => props.color || '#000'};
  padding: 4px 5px;
  border-radius: 30px;
  font-weight: bold;
  color: ${(props) => darken(0.4, props.color) || '#ddd'};
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 0;
  width: fit-content;
  margin: 0 auto;
  svg {
    margin-right: 2px;
  }
`;

export const NotFound = styled.div`
  padding: 30px;

  p {
    font-size: 22px;
    color: #333;
  }
`;
