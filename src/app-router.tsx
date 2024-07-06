import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/home";
import NavBar from "./components/navbar";
import { Footer } from "./components/footer";
import { QuemSomos } from "./pages/quem-somos";
import { ScrollToTop } from "./providers/scroll-top";
import { Portais } from "./pages/solucoes/portais-page";
import { AppsPage } from "./pages/solucoes/apps-page";
import { BlogPage } from "./pages/blog";
import { AppConfig } from "./config";
import { ArticlePage } from "./pages/blog/article";

function App() {
	const { pathnames } = AppConfig();
	return (
		<BrowserRouter>
			<ScrollToTop>
				<>
					<NavBar />
					<Routes>
						<Route path={pathnames.home} Component={HomePage} />
						<Route path={pathnames.contato} Component={HomePage} />
						<Route
							path={pathnames.quemsomos}
							Component={QuemSomos}
						/>
						<Route path={pathnames.solucoes} Component={Portais} />
						<Route
							path={pathnames.solucoesPortais}
							Component={Portais}
						/>
						<Route
							path={pathnames.solucoesApps}
							Component={AppsPage}
						/>
						<Route path={pathnames.blog} Component={BlogPage} />
						<Route
							path={`${pathnames.blog}/:id`}
							Component={ArticlePage}
						/>
					</Routes>
					<Footer />
				</>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
