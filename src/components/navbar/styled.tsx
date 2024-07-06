import styled from "styled-components";
import { MediaQuery } from "../../styled/GlobalStyles";

export const NavbarStyled = styled.div`
	width: 100%;
	display: flex;
	background: #000;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	z-index: 1;
	padding: 0px 0px 0px 0px;

	.logo {
		margin-left: 20px;
	}

	@media ${MediaQuery.lg} {
		padding: 0px 60px 0px 60px;
		.logo {
			margin-left: 0px;
		}
	}
`;

export const MenuStyled = styled.menu`
	width: 100%;
	height: 100vh;
	background-color: #000;
	flex-direction: column;
	flex-wrap: wrap;
	position: absolute;
	right: auto;
	left: auto;
	top: 0;
	padding: 40px 40px 0px 40px;
	display: none;
	font-weight: 600;

	&.active {
		display: flex;
	}

	.item {
		width: 100%;
		display: flex;
		justify-content: center;

		a {
			transition: all 0.2s ease-in;
			font-size: 1.4em;
			padding: 15px 0px 15px 0px;
			&:hover {
				color: ${(props) => props.theme.colors.secondary};
				transition: all 0.2s ease-in;
			}
			&.active {
				color: ${(props) => props.theme.colors.secondary};
			}
		}

		&.sub {
			flex-direction: column;
			flex-wrap: wrap;
			a {
				width: 100%;
				display: flex;
				justify-content: center;
			}

			&:hover {
				.submenu {
					display: flex;
				}
			}
		}

		.submenu {
			width: 100%;
			flex-direction: column;
			flex-wrap: wrap;
			display: flex;
			padding: 0px 0px 30px 0px;
			background-color: #000;

			a {
				width: auto;
				display: flex;
				margin-bottom: 10px;
				padding: 0px 0px 0px 0px;
				color: #fff;
				justify-content: center;
				font-size: 1.2em;
				transition: all 0.2s ease-in;

				&:hover {
					color: ${(props) => props.theme.colors.secondary};
					transition: all 0.2s ease-in;
				}
				&.active {
					color: ${(props) => props.theme.colors.secondary};
				}
			}
		}
	}

	@media ${MediaQuery.lg} {
		width: auto;
		height: initial;
		position: initial;
		flex-direction: row;
		flex-wrap: nowrap;
		padding: 0px 0px 0px 0px;
		display: flex;

		&.active {
			display: flex;
		}

		.item {
			width: fit-content;
			padding: 5px;
			margin-right: 15px;
			font-size: 16px;
			position: relative;

			a {
				font-size: 1em;
			}

			.submenu {
				width: 290px;
				position: absolute;
				display: flex;
				top: 50px;
				right: -35px;
				padding: 20px 40px 10px 0px;
				display: none;

				a {
					padding: 0px 0px 0px 20px;
					justify-content: flex-end;
					font-size: 1em;
				}
			}
		}
	}
`;

export const MenuToggleStyled = styled.div`
	position: relative;
	width: 40px;
	height: 30px;
	margin: 25px;
	display: flex;
	top: 0px;
	right: 0px;
	z-index: 1;
	cursor: pointer;

	@media ${MediaQuery.lg} {
		display: none;
	}

	span {
		width: 40px;
		height: 4px;
		margin: 0 auto;
		position: relative;
		display: flex;
		top: 12px;
		transition-duration: 0s;
		transition-delay: 0.2s;
		transition: background-color 0.3s;
		background-color: #fff;

		&::before,
		&::after {
			position: absolute;
			content: "";
			width: 40px;
			height: 4px;
			background-color: #fff;
			display: block;
			opacity: 1;
		}
		&::before {
			margin-top: -12px;
			transition-property: margin, transform;
			transition-duration: 0.2s;
			transition-delay: 0.2s, 0;
		}
		&::after {
			margin-top: 12px;
			transition-property: margin, transform;
			transition-duration: 0.2s;
			transition-delay: 0.2s, 0;
		}
	}

	&.active {
		span {
			background-color: #000;
			transition: 0.3s background-color;

			&::before {
				margin-top: 0;
				transform: rotate(45deg);
				transition-delay: 0, 0.2s;
			}

			&::after {
				margin-top: 0;
				transform: rotate(-45deg);
				transition-delay: 0, 0.2s;
			}
		}
	}
`;
