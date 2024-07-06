import bg6 from "../../assets/bg6.jpg";
import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";

export const HeaderPagesStyled = styled.div`
	width: 100%;
	display: flex;
	min-height: 400px;
	flex-direction: column;
	background-image: url(${bg6});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 120px 20px 60px 20px;
	margin: 0px 0px 30px 0px;

	h1 {
		width: 100%;
		line-height: 1.2em;
		margin-bottom: 10px;
	}

	h2 {
		width: 100%;
		font-size: 1.2em;
		font-weight: normal;
	}

	@media ${MediaQuery.lg} {
		padding: 150px 60px 75px 60px;
	}
`;
