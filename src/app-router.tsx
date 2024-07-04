import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/home";
import NavBar from "./components/navbar";
import { Footer } from "./components/footer";
import { QuemSomos } from "./pages/quem-somos";
import { ScrollToTop } from "./providers/scroll-top";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<>
					<NavBar />
					<Routes>
						<Route path="/" Component={HomePage} />
						<Route path="/contact" Component={HomePage} />
						<Route path="/quem-somos" Component={QuemSomos} />
					</Routes>
					<Footer />
				</>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
