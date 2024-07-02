import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";

export const SelfAreaStyled = styled.section`
	width: 100%;
	min-height: 500px;
	height: auto;
	display: flex;
	flex-direction: column;
	border: 1px solid ${(props) => props.theme.colors.border.primary};
	margin: 80px 0px 0px 0px;
	align-items: stretch;

	@media ${MediaQuery.md} {
		flex-direction: row;
		margin: 20px 0px 0px 0px;
	}
`;

export const SelfAreaCollumnStyled = styled.div<{ bg: string }>`
	width: 100%;
	height: auto;
	padding: 40px;
	display: flex;
	flex-direction: column;
	border-right: 1px solid ${(props) => props.theme.colors.border.primary};
	background-image: url(${(props) => props.bg});
	background-repeat: no-repeat;
	background-size: contain;

	h3 {
		margin: 0px 0px 20px 0px;
		line-height: 1.2em;
	}
	p {
		width: 100%;
		color: #fff;
	}

	@media ${MediaQuery.md} {
		width: 300px;
	}

	@media ${MediaQuery.lg} {
		width: 500px;
		padding: 50px;
		background-size: cover;

		h3 {
			margin: 90px 0px 30px 0px;
			line-height: 1.2em;
		}
		p {
			width: 80%;
			font-size: 1.1em;
			line-height: 1.8em;
		}
	}
`;

export const SelfAreaCollumnBoxStyled = styled.div`
	width: 100%;
	display: flex;
	padding: 20px;
	padding-bottom: 0px;

	@media ${MediaQuery.md} {
		width: calc(100% - 300px);
	}

	@media ${MediaQuery.lg} {
		width: calc(100% - 300px);
		padding: 40px;
	}
`;
