import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";
import bg6 from "../../assets/bg6.jpg";

export const BlogController = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 0px 20px 0px 20px;

	article {
		width: 100%;
		margin-bottom: 20px;
	}

	@media ${MediaQuery.lg} {
		article {
			width: calc((100% / 2) - 20px);
			margin-right: 20px;
			&:nth-child(2n) {
				margin-right: 0;
			}
		}
	}
	@media ${MediaQuery.xxl} {
		padding: 0px 60px 0px 60px;

		article {
			width: calc((100% / 4) - 20px);
			&:nth-child(2n) {
				margin-right: 20px;
			}
			&:nth-child(4n) {
				margin-right: 0;
			}
		}
	}
`;

export const ArticlePageStyled = styled.div`
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
	color: ${(props) => props.theme.colors.gray};

	article {
		width: 100%;
		margin: 0px auto;
		background: #000;
		padding: 20px 30px;
		box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.gray};

		.date {
			font-size: 0.9em;
		}
		h1 {
			color: #fff;
			margin: 20px 0px;
			font-size: 2em;
		}
		h3 {
			font-size: 1.5em;
			margin: 40px 0px 20px 0px;
			font-weight: 600;
			color: #fff;
		}

		h4 {
			color: #fff;
			margin: 0px 0px 5px 0px;
		}

		p {
			line-height: 1.5em;
			margin-bottom: 20px;
		}
	}

	@media ${MediaQuery.lg} {
		padding: 150px 60px 75px 60px;
		article {
			width: 900px;
			padding: 40px 60px;

			h1 {
				font-size: 3em;
			}
		}
	}
`;
