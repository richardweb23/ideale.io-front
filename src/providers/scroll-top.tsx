import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "../components/hook/useScroll";

export const ScrollToTop = ({ children }: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const { scrollTop, scrollTo } = useScroll();
	useEffect(() => {
		scrollTop();

		if (pathname === "/contato") {
			scrollTo("contato");
		}
	}, [pathname]);

	return children;
};
