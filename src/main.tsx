import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app-router.tsx";

import "./index.css";

import GlobalStyles from "./styled/GlobalStyles.ts";
import ThemeClient from "./providers/themeProvider.tsx";
import { Provider } from "jotai";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider>
			<ThemeClient>
				<GlobalStyles />
				<App />
			</ThemeClient>
		</Provider>
	</React.StrictMode>
);
