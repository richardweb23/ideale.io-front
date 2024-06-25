import styled from "styled-components";

export const BoxNumbersStyled = styled.div`
	width: 245px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;

	h2 {
		width: 100%;
		margin-bottom: 10px;
		text-align: center;
		font-weight: 400;
		font-size: 4.5em;
		color: ${(props) => props.theme.colors.blue.secondary};
	}
	p {
		width: 100%;
		text-align: center;
	}
`;
