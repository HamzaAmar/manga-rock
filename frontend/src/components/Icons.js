import styled from "styled-components";

export const Menu = styled.div`
  cursor: pointer;
  transition: transform 1s;

  &:hover div,
  &:hover {
    transform: translateX(-15px);
  }
  div {
    width: 1.7rem;
    height: 3px;
    border-radius: 0.7px;
    background-color: ${({ theme }) => theme.secondary.dark};
    margin: 4px;
    position: relative;
    transition: transform 1s;
    &:nth-child(2) {
      transform: translateX(-15px);
    }
    &::before {
      content: "";
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.secondary.light};
      position: absolute;
      top: 0;
      right: 110%;
    }
  }
`;

export const Null = styled.div`
  width: 1rem;
  height: 2px;
  border-radius: 1px;
`;
