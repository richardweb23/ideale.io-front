import bg6 from "../../assets/bg6.jpg";
import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";

export const HeaderPagesStyled = styled.div`
	width: 100%;
	display: flex;
	min-height: auto;
	flex-direction: column;
	background-image: url(${bg6});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 110px 20px 30px 20px;
	margin: 0px 0px 30px 0px;

	h1 {
		width: 100%;
		line-height: 1.2em;
		margin-bottom: 30px;
	}

	h2 {
		width: 100%;
		font-size: 1.2em;
		line-height: 1.6em;
		font-weight: normal;
	}

	@media ${MediaQuery.lg} {
		min-height: 400px;
		padding: 130px 60px 75px 60px;
		h2 {
			width: 800px;
		}
	}
`;
