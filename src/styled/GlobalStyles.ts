"use client";

import { ComponentProps } from "react";
import styled, { createGlobalStyle } from "styled-components";

const breakpoints = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px",
};

export const MediaQuery = {
	sm: `(min-width: ${breakpoints.sm})`,
	md: `(min-width: ${breakpoints.md})`,
	lg: `(min-width: ${breakpoints.lg})`,
	xl: `(min-width: ${breakpoints.xl})`,
	xxl: `(min-width: ${breakpoints.xxl})`,
};

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: "Open Sans", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 14px;
  }

  @media ${MediaQuery.md} {
    body {
      font-size: 15px;
    }
  }

  @media ${MediaQuery.sm} {
    body {
      font-size: 16px;
    }
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
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
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
	padding: 0px 20px 0px 20px;

	@media ${MediaQuery.lg} {
		padding: 0px 60px 0px 60px;
	}
`;

export const LabelStyled = styled.label`
	color: ${(props) => props.theme.colors.gray};
`;

type Props = ComponentProps<"input"> & {
	$errorColor?: boolean;
};

export const InputStyled = styled.input<Props>`
	color: ${(props) => props.theme.colors.gray};
	background-color: #000;
	border-radius: 4px;
	border: 0px;
	box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.gray};
	padding: 20px 15px;
	&:hover {
		box-shadow: 0px 0px 0px 2px ${(props) => props.theme.colors.gray};
	}

	${(props) =>
		props.$errorColor &&
		`
    box-shadow: 0px 0px 0px 1px ${props.theme.colors.red};
    &:hover {
		  box-shadow: 0px 0px 0px 2px ${props.theme.colors.red};
	  }
  `}
`;

export default GlobalStyles;
