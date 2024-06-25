"use client";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 16px;
  }

  @media (min-width: 600px) {
    html {
        font-size: 1.125em;
    }
  }
  @media (min-width: 1000px) {
      html {
          font-size: 1.25em;
      }
  }

  @keyframes bgScroll {
    0% {
      background-position : 0px 0px
    }
    100% {
      background-position : 0px -808px
    }
  }

  body {
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
		font-size: 3em;
  }
  h2 {
		font-size: 1.5em;
  }
  h3 {
		font-size: 2.5em;
    font-weight: normal;
  }
`;

export const ContainerStyled = styled.div`
	width: 100%;
	padding: 0px 60px 0px 60px;
`;

export default GlobalStyles;
