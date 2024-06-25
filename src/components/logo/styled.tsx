import styled from "styled-components";

export const LogoSyled = styled.div`
	display: flex;
	font-size: 58px;
	font-family: 'Arch';
	line-height: 50px;
	padding: 20px 0px 10px 0px;
	span {
		color: ${(props) => props.theme.colors.secondary};
	}
`;
