import styled from 'styled-components';

export const Dots = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  bottom: 10rem;
  z-index: 5;
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
