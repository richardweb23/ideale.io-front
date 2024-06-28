import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/home";
import NavBar from "./components/navbar";
import { Footer } from "./components/footer";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" Component={HomePage} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
