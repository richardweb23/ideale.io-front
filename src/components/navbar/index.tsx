import { MenuStyled, NavbarStyled } from "./styled";
import { Logo } from "../logo";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<NavbarStyled>
			<Logo />
			<MenuStyled>
				<div className="item">
					<Link to={"/"}>Home</Link>
				</div>
				<div className="item" onMouseOver={() => console.log("teste")}>
					<Link to={"/"}>Soluções</Link>
				</div>
				<div className="item">
					<Link to={"/"}>Quem Somos</Link>
				</div>
				<div className="item">
					<Link to={"/"}>Blog</Link>
				</div>
				<div className="item">
					<Link to={"/"}>Contato</Link>
				</div>
				<div className="item">
					<Link to={"/"}>Área do Cliente</Link>
				</div>
			</MenuStyled>
		</NavbarStyled>
	);
};

export default NavBar;
