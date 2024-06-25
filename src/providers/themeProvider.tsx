"use client";

import { ThemeProvider, type DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
	colors: {
		background: "#141416",
		primary: "#fff",
		secondary: "#4373df",
		gray: "#8a8a8a",
		blue: {
			primary: "#4373df",
			secondary: "#c1ccf3",
		},
	},
};

export default function ThemeClient({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
