import bg6 from "../../assets/bg6.jpg";
import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";

export const HeaderPagesStyled = styled.div`
	width: 100%;
	display: flex;
	min-height: 400px;
	padding: 120px 0px 150px 0px;
	flex-direction: column;
	background-image: url(${bg6});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 120px 20px 60px 20px;
	margin: 0px 0px 30px 0px;

	h1 {
		width: 100%;
	}

	h2 {
		width: 100%;
		font-size: 1.5em;
		font-weight: normal;
	}

	@media ${MediaQuery.lg} {
		padding: 150px 60px 120px 60px;
	}
`;
