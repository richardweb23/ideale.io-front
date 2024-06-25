import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";
export type BoxDescriptionStyledEnum = "type-1" | "type-2";
export type BoxDescriptionStyledProps = {
	type: "type-1" | "type-2";
	top: string;
};

export const BoxDescriptionStyled = styled.div<BoxDescriptionStyledProps>`
	max-width: 100%;
	min-height: auto;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	padding: 30px;
	margin: 0px 20px 40px 20px;
	background-color: #1b1c1e;
	margin-top: 0px;

	h2 {
		font-size: 1.2em;
		display: flex;
		color: ${(props) => props.theme.colors.blue.secondary};

		span {
			font-size: 1.9em;
			line-height: 1em;
			margin-right: 5px;
		}
	}
	p {
		color: ${(props) => props.theme.colors.gray};
		line-height: 1.5em;
		margin: 20px 0px 20px 0px;
	}

	button {
		width: fit-content;
		margin-top: auto;
	}

	.fio {
		width: 100%;
		height: 5px;
		background-color: #3f4349;
		margin-top: 20px;
		border-radius: 7px;
	}

	.icon {
		width: 50px;
		height: 50px;
		margin-bottom: 10px;
		display: flex;

		> svg {
			color: ${(props) => props.theme.colors.blue.primary};
		}
	}

	${({ type, theme }) =>
		type === "type-2" &&
		`
			width: 100%;
			max-width: initial;
			padding: 15px;
			min-height: auto;
			background: ${theme.colors.blue.primary};
			margin: 0px 0px 20px 0px;

			h2 {
				font-size: 1.2em;
				color: #fff;
			}
			p {
				font-size: 0.9em;
				color: #fff;
				height: 100%;
			}
			.icon { 
				width: 30px;
				height: 30px;
				margin-top: 20px;
				display: flex;
				align-self: end;

				svg {
					color: #fff;
				}
			}
  `}

	@media ${MediaQuery.xxl} {
		max-width: 320px;
		min-height: 500px;

		${({ type }) =>
			type === "type-2" &&
			`
				max-width: 250px;
				min-height: 200px;
			`}
	}
	@media ${MediaQuery.xxl} {
		margin-top: ${(props) => props.top};
	}
`;
