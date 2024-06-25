import styled from "styled-components";
import bg from "../../assets/bg1.jpg";

export const MainStyled = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
`;

export const IntroPageStyled = styled.main`
	width: 100%;
	height: 600px;
	display: flex;
	flex-direction: column;
	padding: 60px;
	margin: 0px;
	text-align: left;
	padding-left: 0px;
	background-image: url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position-y: -400px;

	h1,
	h2 {
		max-width: 800px;
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
`;

export const SectionStyled = styled.section`
	width: 100%;
	min-height: 500px;
	height: auto;
	display: flex;
	border: 1px solid ${(props) => props.theme.colors.gray};
	margin: 80px 0px 0px 0px;
	align-items: stretch;
`;

export const CollumnStyled = styled.div<{ bg: string }>`
	width: 500px;
	height: auto;
	padding: 50px;
	display: flex;
	flex-direction: column;
	border-right: 1px solid ${(props) => props.theme.colors.gray};
	background-image: url(${(props) => props.bg});
	background-repeat: no-repeat;
	background-size: cover;

	h3 {
		margin: 90px 0px 30px 0px;
		line-height: 1.2em;
	}
	p {
		width: 80%;
		font-size: 1.1em;
		line-height: 1.8em;
		color: ${(props) => props.theme.colors.gray};
	}
`;

export const CollumnBoxStyled = styled.div`
	width: 800px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 40px;
	padding-bottom: 0px;
	margin: 0px auto;
`;
