import NavBar from "../../components/navbar";
import { IntroPage } from "./intro";
import { SectionClients } from "./section-clients";
import { SectionOne } from "./section-one";
import { SectionThree } from "./section-three";
import { SectionTwo } from "./section-two";
import { MainStyled } from "./styled";

export const HomePage = () => {
	return (
		<MainStyled>
			<NavBar />
			<IntroPage />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionClients />
		</MainStyled>
	);
};
