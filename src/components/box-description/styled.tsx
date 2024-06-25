import styled from "styled-components";
export type BoxDescriptionStyledEnum = "type-1" | "type-2";
export type BoxDescriptionStyledProps = {
	type: "type-1" | "type-2";
};

export const BoxDescriptionStyled = styled.div<BoxDescriptionStyledProps>`
	max-width: 320px;
	min-height: 500px;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	padding: 30px;
	margin: 0px 20px 40px 20px;
	background-color: #1b1c1e;
	align-items: flex-start;

	h2 {
		font-size: 1.2em;
	}
	p {
		color: ${(props) => props.theme.colors.gray};
		line-height: 1.5em;
		margin: 20px 0px 0px 0px;
	}

	button {
		width: fit-content;
		margin-top: auto;
	}

	${({ type, theme }) =>
		type === "type-2" &&
		`
	  padding: 15px;
	  max-width: 200px;
	  min-height: 200px;
    background: ${theme.colors.blue};
    justify-content: start;

    h2 {
      font-size: 1.2em;
    }

    p {
		  font-size: 0.9em;
      color: #fff;
    }
  `}
`;
