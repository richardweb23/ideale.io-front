import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/home";
import NavBar from "./components/navbar";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" Component={HomePage} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
