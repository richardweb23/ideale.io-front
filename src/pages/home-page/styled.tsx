import styled from "styled-components";
import bg from "../../assets/bg1.jpg";
import { MediaQuery } from "../../styled/GlobalStyles";

export const MainStyled = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
`;

export const IntroPageStyled = styled.header`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	padding: 30px;
	margin: 0px;
	text-align: left;
	margin-top: 80px;
	background-image: url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position-y: center;

	h1,
	h2 {
		max-width: 100%;
		line-height: normal;
		span {
			background-color: ${(props) => props.theme.colors.secondary};
		}
	}
	h2 {
		margin-top: 20px;
		margin-bottom: 40px;
		font-weight: normal;
	}

	@media ${MediaQuery.lg} {
		height: 500px;
		padding: 60px;
		margin-left: 0px;

		h2 {
			max-width: 800px;
		}

		button {
			max-width: fit-content;
		}
	}
`;

export const SectionOneControlerStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding-bottom: 0px;
	margin: 0px auto;

	@media ${MediaQuery.lg} {
		width: 800px;
		flex-direction: row;
		margin: 0px auto;
		justify-content: center;
	}
`;

export const SectionTwoControlerStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 0px 0px 0px 0px;

	@media ${MediaQuery.lg} {
		width: 800px;
		margin: 0px auto;
		justify-content: space-between;
		flex-direction: row;
	}
`;

export const SectionThreeControlerBGStyled = styled.div<{ bg: string }>`
	width: 100%;
	display: flex;
	background-image: url(${(props) => props.bg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position-y: 40%;
	background-position-x: center;
`;

export const SectionThreeControlerStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 80px 0px 200px 0px;

	.controller {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
	}

	h1 {
		width: 100%;
		text-align: center;
		font-weight: 400;
		font-size: 2.3em;
		margin: 0px 0px 20px 0px;
	}

	@media ${MediaQuery.lg} {
		width: 100%;
		margin: 0px auto;
		justify-content: space-between;
		flex-direction: row;
	}
`;

export const SectionClientsControlerStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 0px 0px 0px 0px;

	h1 {
		width: 100%;
		text-align: center;
		font-weight: 400;
		font-size: 2.3em;
		margin: 80px 0px 20px 0px;
	}
`;
export const ControlerLogosStyled = styled.div`
	width: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	margin: 0px 0px 0px 0px;
	.logo {
		width: 100%;
		display: flex;
		height: auto;
		padding: 40px;
		align-items: center;
		border-color: ${(props) => props.theme.colors.border.primary};
		border-style: solid;
		border-width: 1px 1px 0px 1px;
		justify-content: center;

		&:last-child {
			border-width: 1px;
		}
		img {
			display: flex;
		}
	}

	@media ${MediaQuery.lg} {
		.logo {
			width: 50%;
			border-width: 1px 1px 1px 1px;
		}
	}

	@media ${MediaQuery.xl} {
		.logo {
			width: 250px;
			border-width: 1px 0px 1px 1px;
		}
	}
`;

export const DescriptionClientsStyled = styled.div`
	width: 100%;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	border-color: ${(props) => props.theme.colors.border.primary};
	border-style: solid;
	border-width: 1px 1px 1px 1px;
	margin-top: 40px;

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid ${(props) => props.theme.colors.border.primary};
		padding: 20px 20px;
	}

	.column {
		width: auto;
		display: flex;
		flex-direction: column;
		padding: 0px 20px 40px 20px;
		p {
			width: 100%;
		}
		a {
			text-decoration: underline;
		}

		.list-products {
			width: auto;
			height: auto;
			display: flex;
			margin: 40px auto 0px auto;

			.product {
				width: auto;
				margin: 0px 40px;
				text-align: center;
			}
		}
	}

	@media ${MediaQuery.lg} {
		flex-direction: row;
		flex-wrap: nowrap;
		.logo {
			padding: 60px 60px;
		}

		.column {
			padding: 60px 60px 60px 60px;
		}
	}
`;
