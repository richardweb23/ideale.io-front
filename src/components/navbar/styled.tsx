import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";

export const NavbarStyled = styled.div`
	width: 100%;
	display: flex;
	background: #000;
	padding: 10px 20px;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	z-index: 1;

	@media ${MediaQuery.lg} {
		padding: 0px 60px 0px 60px;
	}
`;

export const MenuStyled = styled.menu`
	display: flex;
	.item {
		padding: 5px;
		margin-right: 15px;
		font-size: 16px;

		a:hover {
			color: ${(props) => props.theme.colors.secondary};
			transition: all 0.1s ease-in;
		}
	}
`;
