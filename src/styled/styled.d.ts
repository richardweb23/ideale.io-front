import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			background: string;
			primary: string;
			secondary: string;
			gray: string;
			blue: {
				primary: string;
				secondary: string;
			};
		};
	}
}
