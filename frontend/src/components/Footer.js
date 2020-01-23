import React from "react";
import styled, { css } from "styled-components";
// import { Container } from "../styles/styles";

const Container = styled.footer`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary.light};
`;

const Footer = () => {
  return (
    <Container>
      <div
        css={css`
          background: red;
        `}
      >
        <ul
          css={css`
            background: papayawhip;
            color: red;
          `}
        >
          <li>Home</li>
          <li>Manga</li>
          <li>About</li>
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
      <div></div>
      <div>Hello</div>
    </Container>
  );
};

export default Footer;
