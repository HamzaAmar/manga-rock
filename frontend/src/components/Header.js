import React, { useState } from "react";
import styled from "styled-components";

import "../styles/styles.css";
import { Menu } from "./Icons";

const Container = styled.header`
  width: 100%;
  height: ${({ cover }) => cover && "100vh"};
`;

const ListIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

const Nav = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1550;
  background-color: ${({ theme }) => theme.primary.light};
  visibility: collapse;
  opacity: 0;
  transform: scale(1, 0);
  transform-origin: top;
  transition: opacity 350ms ease-out, transform 350ms ease-out;
  /* border-bottom: 10rem solid brown;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%; */

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    font-size: 2.5rem;
    letter-spacing: 4px;
    font-weight: bolder;
    position: relative;

    li {
      cursor: pointer;
      background-image: linear-gradient(
        ${({ theme }) => theme.secondary.light},
        ${({ theme }) => theme.secondary.dark}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      :nth-child(1) {
        position: absolute;
        left: 1.5rem;
        top: 1.5rem;
      }
    }
  }
`;

const Logo = styled.h1`
  letter-spacing: 3px;
  font-size: 2rem;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.secondary.main};
  }
`;

const Times = styled.div`
  cursor: pointer;
  div {
    width: 1.3rem;
    height: 2px;
    background: white;
    :nth-child(1) {
      transform: rotate(45deg) translateY(50%);
    }
    :nth-child(2) {
      transform: rotate(-45deg) translateY(-50%);
    }
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Heading = styled.h1`
  background-image: linear-gradient(
    95deg,
    ${({ theme }) => theme.secondary.dark},
    ${({ theme }) => theme.secondary.light}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bolder;
  font-style: italic;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  padding: 1.2rem;
  line-height: 1.7;
`;

const Header = ({ cover }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container cover={cover}>
      <NavBar>
        <Logo>
          Amar <span>LRD</span>
        </Logo>
        <Nav className={openMenu ? `open_menu` : ``}>
          <ul>
            <li>
              <Times onClick={() => setOpenMenu(false)}>
                <div />
                <div />
              </Times>
            </li>
            <li> Home </li>
            <li> Portfolio </li>
            <li> Blog </li>
            <li>Contact ME</li>
          </ul>
        </Nav>
        <Menu onClick={() => setOpenMenu(true)}>
          <div />
          <div />
          <div />
        </Menu>
      </NavBar>
    </Container>
  );
};

export default Header;
