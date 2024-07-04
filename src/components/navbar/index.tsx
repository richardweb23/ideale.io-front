import { MenuStyled, MenuToggleStyled, NavbarStyled } from "./styled";
import { Logo } from "../logo";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const NavBar = () => {
	const [open, setOpen] = useState(true);
	return (
		<NavbarStyled>
			<Logo />
			<MenuToggleStyled
				className={`${open ? "active" : ""}`}
				onClick={() => setOpen(!open)}
			>
				<span></span>
			</MenuToggleStyled>
			<MenuStyled className={`${open ? "active" : ""}`}>
				<div className="item">
					<NavLink
						to={"/"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Home
					</NavLink>
				</div>
				<div className="item sub">
					<a href="#" onClick={(e) => e.preventDefault()}>
						Soluções
					</a>
					<div className={"submenu"}>
						<NavLink to="">Desenvolvimento de portais</NavLink>
						<NavLink to="">Desenvolvimento de apps</NavLink>
					</div>
				</div>
				<div className="item">
					<NavLink
						to={"/quem-somos"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Quem Somos
					</NavLink>
				</div>
				<div className="item">
					<NavLink
						to={"/blog"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Blog
					</NavLink>
				</div>
				<div className="item">
					<NavHashLink
						to={"/contact/#form"}
						scroll={(e) =>
							e.scrollIntoView({
								behavior: "smooth",
								block: "center",
							})
						}
					>
						Contato
					</NavHashLink>
				</div>
				<div className="item">
					<Link to={"/"}>Área do Cliente</Link>
				</div>
			</MenuStyled>
		</NavbarStyled>
	);
};

export default NavBar;
