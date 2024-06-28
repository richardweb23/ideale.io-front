import styled from "styled-components";
import bg5 from "../../assets/bg5.jpg";
import { MediaQuery } from "../../styled/GlobalStyles";

export const FaleConoscoStyled = styled.div`
	width: 100%;
	min-height: 500px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	margin: 40px 0px 0px 0px;

	.description {
		width: 100%;
		border-style: solid;
		border-color: ${(props) => props.theme.colors.border.primary};
		border-width: 1px;
		justify-content: center;
		align-items: center;
		background-image: url(${bg5});
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;

		h1 {
			display: flex;
			width: 280px;
			font-size: 2em;
			margin: 0px auto;
			padding: 20px 0px 20px 0px;
		}
		p {
			display: flex;
			width: 280px;
			margin: 0px auto;
			padding: 0px 0px 20px 0px;
			color: ${(props) => props.theme.colors.gray};
		}

		@media ${MediaQuery.lg} {
			width: 400px;

			h1 {
				width: 280px;
				padding: 150px 0px 20px 0px;
			}
		}
	}

	.form-controler {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 40px 20px 40px 20px;
		border-style: solid;
		border-color: ${(props) => props.theme.colors.border.primary};
		border-width: 0px 1px 1px 1px;

		@media ${MediaQuery.lg} {
			width: calc(100% - 400px);
			border-width: 1px 1px 1px 0px;
			padding: 100px 20px 100px 20px;

			h1 {
				padding: 150px 0px 20px 0px;
			}
		}

		form {
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			margin: 0px auto;
			justify-content: space-between;
			button {
				width: 100%;
			}

			@media ${MediaQuery.xl} {
				width: 550px;
			}
		}

		.column {
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;

			.field {
				width: 100%;
				display: flex;
				flex-direction: column;
				margin-bottom: 30px;
				position: relative;

				.error {
					font-size: 0.9em;
					position: absolute;
					padding: 0px 0px 0px 0px;
					bottom: -24px;
					color: ${(props) => props.theme.colors.red};
				}

				@media ${MediaQuery.xl} {
					width: 250px;
					margin-bottom: 40px;
				}
			}
			label {
				display: flex;
				width: 100%;
				margin: 0px 0px 10px 0px;
			}
			input {
				width: 100%;
				display: flex;
			}
		}
	}
`;
