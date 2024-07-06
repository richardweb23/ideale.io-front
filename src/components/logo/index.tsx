"use client";

import { Link } from "react-router-dom";
import { LogoSyled } from "./styled";

export const Logo = () => {
	return (
		<Link to={"/"}>
			<LogoSyled className="logo">
				ideale<span>.io</span>
			</LogoSyled>
		</Link>
	);
};
