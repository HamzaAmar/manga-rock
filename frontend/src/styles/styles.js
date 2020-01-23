import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  text-align: center;
  border: #aaa;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary.dark};
  border-radius: 10px;
`;

export const Heading = styled.h1`
  letter-spacing: 2px;
  padding-bottom: 4px;
  position: relative;
  display: inline-block;
  border-bottom: 2px solid white;

  ::before {
    width: 70%;
    height: 1px;
    content: "";
    margin-left: calc(50%);
    margin-top: 5px;
    transform: translateX(-50%);
    background-color: white;
    position: absolute;
    top: calc(100% + 2px);
  }
`;

export const Button = styled.button`
  padding: 1rem 1.4rem;
  border: ${({ theme }) => theme.secondary.main} 2px solid;
  color: ${({ theme }) => theme.secondary.main};
  background-color: transparent;
  outline: none;
  margin: 0.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.secondary.main} 50%,
    ${({ theme }) => theme.primary.main} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background 300ms ease-out;

  &:hover {
    background-position: left bottom;
    color: ${({ theme }) => theme.primary.main};
    transform-origin: left;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 2px;
  font-variant: small-caps;
  padding: 1rem;
`;

export const Input = styled.input``;
