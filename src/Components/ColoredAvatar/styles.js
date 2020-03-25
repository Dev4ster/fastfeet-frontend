import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Avatar = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${(props) => lighten(0.09, props.color) || '#000'};
  font-size: 16px;
  align-items: center;
  justify-content: center;
  color: ${(props) => darken(0.4, props.color) || '#000'};
  margin-right: 3px;
  display: inline-flex;
`;
