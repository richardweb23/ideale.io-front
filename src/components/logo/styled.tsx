import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";

export const LogoSyled = styled.div`
	display: flex;
	font-size: 48px;
	font-family: "Arch";
	line-height: 50px;
	padding: 20px 0px 10px 0px;
	span {
		color: ${(props) => props.theme.colors.secondary};
	}

	@media ${MediaQuery.lg} {
		font-size: 58px;
	}
`;
