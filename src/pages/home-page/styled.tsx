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
	background-position: center;
`;

export const SectionThreeControlerStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 150px 0px 300px 0px;

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
