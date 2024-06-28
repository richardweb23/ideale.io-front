import { IntroPage } from "./intro";
import { SectionClients } from "./section-clients";
import { SectionOne } from "./section-one";
import { SectionThree } from "./section-three";
import { SectionTwo } from "./section-two";
import { MainStyled } from "./styled";
import * as G from "../../styled/GlobalStyles";
import { FaleConosco } from "../fale-conosco";

export const HomePage = () => {
	return (
		<MainStyled>
			<IntroPage />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionClients />
			<G.ContainerStyled>
				<FaleConosco />
			</G.ContainerStyled>
		</MainStyled>
	);
};
