import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  div:nth-child(1) {
    font-size: 3rem;
    font-weight: bolder;
    letter-spacing: 0.5rem;
  }
  div:nth-child(2) {
    font-size: 1.4rem;
    letter-spacing: 8px;
    text-transform: uppercase;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <div>L 4 </div>
      <div>Gym</div>
    </LogoContainer>
  );
};

export default Logo;
