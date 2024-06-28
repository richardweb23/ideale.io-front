import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";

export const FooterStyled = styled.div`
	width: 100%;
	min-height: 300px;
	margin-top: 20px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;

	.column {
		width: 100%;
		margin-bottom: 40px;
	}

	p {
		color: ${({ theme }) => theme.colors.gray};
		font-size: 1.2em;
	}

	@media ${MediaQuery.xl} {
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding: 40px;
		margin-top: 40px;

		.column {
			width: 400px;
			margin-bottom: 0px;
		}
	}
`;

export const FooterMenu = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	a {
		width: 100%;
		display: flex;
		margin-bottom: 15px;
		font-size: 1.2em;
		color: ${({ theme }) => theme.colors.gray};
	}
	button {
		margin-top: 20px;
	}
`;

export const FooterRedes = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	a {
		width: 100%;
		display: flex;
		font-size: 1.2em;
		color: ${({ theme }) => theme.colors.gray};
	}

	.credits {
		margin-top: 20px;
	}

	img {
		margin: 10px 0px 40px 0px;
	}

	button {
		margin-top: 20px;
	}
`;
