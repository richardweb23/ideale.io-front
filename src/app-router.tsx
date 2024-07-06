import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/home";
import NavBar from "./components/navbar";
import { Footer } from "./components/footer";
import { QuemSomos } from "./pages/quem-somos";
import { ScrollToTop } from "./providers/scroll-top";
import { Portais } from "./pages/solucoes/portais-page";
import { AppsPage } from "./pages/solucoes/apps-page";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<>
					<NavBar />
					<Routes>
						<Route path="/" Component={HomePage} />
						<Route path="/contato" Component={HomePage} />
						<Route path="/quem-somos" Component={QuemSomos} />
						<Route path="/solucoes" Component={Portais} />
						<Route
							path="/solucoes/desenvolvimento-portais"
							Component={Portais}
						/>
						<Route
							path="/solucoes/desenvolvimento-apps"
							Component={AppsPage}
						/>
					</Routes>
					<Footer />
				</>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
