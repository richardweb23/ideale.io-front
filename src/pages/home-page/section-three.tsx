import bg4 from "../../assets/bg4.jpg";
import { BoxNumbers } from "../../components/box-numbers";
import * as G from "../../styled/GlobalStyles";
import * as S from "./styled";

export const SectionThree = () => {
	return (
		<S.SectionThreeControlerBGStyled bg={bg4}>
			<G.ContainerStyled>
				<S.SectionThreeControlerStyled>
					<h1>Temos orgulho destes números</h1>
					<div className="controller">
						<BoxNumbers
							title="+20"
							description="Portais com nossa colaboração, ao redor do mundo"
						/>
						<BoxNumbers
							title="+15"
							description="Anos de experiência na implementação e migração de portais"
						/>
						<BoxNumbers
							title="+5"
							description="Implantações de cultura de qualidade e automação em nossos clientes"
						/>
						<BoxNumbers
							title="4"
							description="Países com clientes e parceiros atendidos e satisfeitos"
						/>
					</div>
				</S.SectionThreeControlerStyled>
			</G.ContainerStyled>
		</S.SectionThreeControlerBGStyled>
	);
};
