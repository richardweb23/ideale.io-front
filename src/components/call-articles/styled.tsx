import styled from "styled-components";

export const CallArticleStyled = styled.article`
	width: auto;
	min-height: 300px;
	padding: 20px;
	background-color: #000;
	box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.gray};
	color: ${(props) => props.theme.colors.gray};
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.colors.red};
		.title {
			color: ${({ theme }) => theme.colors.red};
		}
	}

	.date {
		font-size: 0.9em;
		margin-bottom: 10px;
	}
	.title {
		font-size: 1.4em;
		font-weight: 600;
		margin-bottom: 25px;
		color: #fff;
	}
`;
