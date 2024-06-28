import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			background: string;
			primary: string;
			secondary: string;
			gray: string;
			red: string;
			border: {
				primary: string;
			};
			blue: {
				primary: string;
				secondary: string;
			};
		};
	}
}
