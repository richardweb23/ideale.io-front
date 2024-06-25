import styled from "styled-components";

export const ButtonStyled = styled.button`
	padding: 15px 30px;
	border: 1px solid ${(props) => props.theme.colors.secondary};
	border-radius: 5px;
	font-size: 1em;
	color: #fff;
	cursor: pointer;
	background-color: ${(props) => props.theme.colors.secondary};
	transition: all 0.3s ease-in;

	&:hover {
		border: 1px solid #fff;
		background-color: ${(props) => props.theme.colors.background};
		transition: all 0.3s ease-in;
	}
`;
