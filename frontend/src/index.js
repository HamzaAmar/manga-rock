import React, { useState } from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import * as serviceWorker from "./serviceWorker";

const theme = {
  dark: {
    primary: {
      main: "#081229",
      light: "#191D3A",
      dark: "#0F111B",
      color: "#eee"
    }
  },
  light: {
    primary: {
      main: "#081229",
      light: "#191D3A",
      dark: "#0F111B",
      color: " #333"
    }
  }
};

const sharedTheme = {
  secondary: {
    light: "#ce3367",
    main: "#EF3B7D",
    dark: "#BF1650"
  }
};

const GlobalStyle = createGlobalStyle`
    *,*::before , *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }
   body{
    box-sizing:border-box;
    background-color:${({ theme }) => theme.primary.main};
    color:${({ theme }) => theme.primary.color};
   }
   h1,h2,h3,h4,h5,h6{
    background:linear-gradient(to right bottom , brown, red , orange );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin:2rem 1rem;
    text-transform:uppercase;
    letter-spacing:1px;
   }
   a{
    background:linear-gradient(to right bottom , brown, red , orange );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position:relative;


    &::after{
      content:'';
      position:absolute;
      bottom:-3px;
      left:0;
      width:100%;
      height:2px;
      background:linear-gradient(to right bottom , brown, red , orange );
      transform:scaleY(1) translateY(0);
      opacity:1;
      transition: transform 2s ease-in-out;

      &:hover{
      transform:scaleY(10) translateX(-100px);
      opacity:0.5;
      }
    }
   }

`;

const App = () => {
  const [color, setColor] = useState("dark");
  return (
    <ThemeProvider theme={{ ...theme[color], ...sharedTheme }}>
      <GlobalStyle theme={theme[color]} />
      <Routes />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
