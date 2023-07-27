import styled from 'styled-components';

export const Dots = styled.div`
  position: absolute;
  display: flex;
  z-index: 5;
  left: 50%;
  right: 50%;
  bottom: 10rem;
`;

export const Dot = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #999;

  & + span {
    margin-left: 0.25rem;
  }
`;
