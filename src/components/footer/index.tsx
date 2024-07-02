import * as G from "../../styled/GlobalStyles";
import { Button } from "../buttons/button";
import { Logo } from "../logo";
import * as S from "./styled";
import linkedin from "../../assets/linkedin.webp";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
	return (
		<G.ContainerStyled>
			<S.FooterStyled>
				<div className="column">
					<Logo />
					<p>
						<br />
						+55 21 98441-1407
						<br />
						<br />
						contato@ideale.io
						<br />
						<br />
						Av. Gustavo Adolfo, 1441 - Vila
						<br />
						Gustavo - São Paulo / SP - 02209-001
					</p>
				</div>
				<div className="column">
					<S.FooterMenu>
						<a href="/">Início</a>
						<a href="/">Soluções</a>
						<a href="/">Visão</a>
						<a href="/">Blog</a>
						<HashLink
							to={"/#contact"}
							scroll={(e) =>
								e.scrollIntoView({
									behavior: "smooth",
									block: "center",
								})
							}
						>
							<Button content="Começar" />
						</HashLink>
					</S.FooterMenu>
				</div>
				<div className="column">
					<S.FooterRedes>
						<p>Redes sociais:</p>
						<a
							href="https://www.linkedin.com/company/ideale-io/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={linkedin}
								alt="Linkedin"
								title="Linkedin"
							/>
						</a>

						<a href="">Política de Privacidade</a>
						<a href="">Política de Cookies</a>
						<p className="credits">© 2023 por ideale.io</p>
					</S.FooterRedes>
				</div>
			</S.FooterStyled>
		</G.ContainerStyled>
	);
};
