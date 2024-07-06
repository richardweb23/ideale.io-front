import styled, { css } from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";
import { SafeAreaType } from ".";

export const SelfAreaStyled = styled.section`
	width: 100%;
	min-height: 200px;
	height: auto;
	display: flex;
	flex-direction: column;
	border: 1px solid ${(props) => props.theme.colors.border.primary};
	margin: 0px 0px 50px 0px;
	align-items: stretch;

	@media ${MediaQuery.md} {
		flex-direction: row;
	}
`;

const CollumType = (type: SafeAreaType) => {
	switch (type) {
		case "title":
			return css`
				h3 {
					text-align: center;
					margin: 0px 0px 0px 0px;
				}
				@media ${MediaQuery.lg} {
					h3 {
						margin: 0px 0px 30px 0px;
					}
				}
			`;
	}
};

export const SelfAreaCollumnStyled = styled.div<{
	bg: string;
	type: SafeAreaType;
}>`
	width: 100%;
	height: auto;
	padding: 30px 40px 10px 40px;
	display: flex;
	flex-direction: column;
	border-right: 1px solid ${(props) => props.theme.colors.border.primary};
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
		padding: 50px;
		width: 300px;
		background-image: url(${(props) => props.bg});
	}

	@media ${MediaQuery.lg} {
		width: 500px;
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

	.icon-controler {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;

		.icon {
			width: 80px;
			display: flex;
			margin: 0px auto 20px auto;
			color: ${({ theme }) => theme.colors.blue.primary};
		}
		h3 {
			width: auto;
			font-size: 1.3em;
			margin: 0px auto;
		}
	}

	${({ type }) => CollumType(type)};
`;

export const SelfAreaCollumnBoxStyled = styled.div`
	width: 100%;
	display: flex;
	padding: 20px;

	@media ${MediaQuery.md} {
		width: calc(100% - 300px);
	}

	@media ${MediaQuery.lg} {
		width: calc(100% - 300px);
		padding: 40px;
	}
`;
