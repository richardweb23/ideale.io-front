import NavBar from "../../components/navbar";
import { IntroPage } from "./intro";
import { SectionOne } from "./section-one";
import { SectionTwo } from "./section-two";
import { MainStyled } from "./styled";

export const HomePage = () => {
	return (
		<MainStyled>
			<NavBar />
			<IntroPage />
			<SectionOne />
			<SectionTwo />
		</MainStyled>
	);
};
