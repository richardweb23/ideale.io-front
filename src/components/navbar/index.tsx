import { MenuStyled, MenuToggleStyled, NavbarStyled } from "./styled";
import { Logo } from "../logo";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { AppConfig } from "../../config";
import { useScroll } from "../hook/useScroll";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { pathnames } = AppConfig();
	const { scrollTop } = useScroll();

	const closeMenuWidth = () => {
		const { innerWidth: width } = window;
		if (width <= 991) {
			setOpen(!open);
		}
	};

	return (
		<NavbarStyled>
			<Logo />
			<MenuToggleStyled
				className={`${open ? "active" : ""}`}
				onClick={() => setOpen(!open)}
			>
				<span></span>
			</MenuToggleStyled>
			<MenuStyled
				className={`${open ? "active" : ""}`}
				onClick={() => closeMenuWidth()}
			>
				<div className="item">
					<NavLink
						to={pathnames.home}
						className={({ isActive }) => (isActive ? "active" : "")}
						onClick={scrollTop}
					>
						Home
					</NavLink>
				</div>
				<div className="item sub">
					<NavLink
						to={pathnames.solucoes}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Soluções
					</NavLink>
					<div className={"submenu"}>
						<NavLink to={pathnames.solucoesPortais}>
							Desenvolvimento de portais
						</NavLink>
						<NavLink
							to={pathnames.solucoesApps}
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							Desenvolvimento de apps
						</NavLink>
					</div>
				</div>
				<div className="item">
					<NavLink
						to={pathnames.quemsomos}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Quem Somos
					</NavLink>
				</div>
				<div className="item">
					<NavLink
						to={pathnames.blog}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Blog
					</NavLink>
				</div>
				<div className="item">
					<NavLink to={pathnames.contato}>Contato</NavLink>
				</div>
				<div className="item">
					<Link to={pathnames.areaCliente}>Área do Cliente</Link>
				</div>
			</MenuStyled>
		</NavbarStyled>
	);
};

export default NavBar;
