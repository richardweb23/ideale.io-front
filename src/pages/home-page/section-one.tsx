import * as G from "../../styled/GlobalStyles";
import bg2 from "../../assets/bg2.webp";
import { BoxDescription } from "../../components/box-description";
import { SelfArea } from "../../components/self-area";
import * as S from "./styled";
import {
	AppsSquadIcon,
	QualityIcon,
	RoadMapIcon,
	WorldIcon,
} from "../../components/icons";

export const SectionOne = () => {
	return (
		<G.ContainerStyled>
			<SelfArea
				title="O que seu <br /> negócio precisa?"
				description="Com mais de 15 anos de experiência em Portais,
								Gestão de Qualidade e Apps, somamos experiências
								que nos habilitam para a missão de braço direto
								do CTO de nossos clientes, na discussão de
								hipóteses de inovação."
				bg={bg2}
			>
				<S.SectionOneControlerStyled>
					<BoxDescription
						icon={<QualityIcon />}
						title="Engenharia de Qualidade de Software"
						description="Nós modernizamos a Qualidade. A sinergia de QA com as squads sem dúvida traz ainda mais agilidade e confiança para suas aplicações. Além de reduzir custos."
						button={{
							onClick: () => console.log(""),
							text: "Saiba mais",
						}}
					/>
					<BoxDescription
						icon={<WorldIcon />}
						title="Desenvolvimento de Portais"
						description="São mais de 15 anos no mercado de Portais, atuando em implantações e treinamento de emancipação de equipes de marketing e jornalismo para atuação em ambientes de autoria, migração de portais para versões mais recentes em base de grande dimensão, e desenvolvimento de conexões com CRMs e outros softwares que colaborem com o ecossistema de TI de nossos clientes."
						button={{
							onClick: () => console.log(""),
							text: "Saiba mais",
						}}
					/>
					<BoxDescription
						icon={<AppsSquadIcon />}
						title="Desenvolvimento de Apps"
						description="Desenvolvimento de Apps híbridos e nativos para o empoderamento de estratégias Omnichannel, e ganho de velocidade na relação com o cliente."
						button={{
							onClick: () => console.log(""),
							text: "Saiba mais",
						}}
					/>
					<BoxDescription
						icon={<RoadMapIcon />}
						title="Jeito Ideale de Gestão de Projetos"
						description="O clientes Ideale têm visão do processo do início ao fim, com o auxílio de ferramentas de gestão de processos e dashboards, para acompanhamento em tempo real da evolução e sucesso do projeto/entrega."
						button={{
							onClick: () => console.log(""),
							text: "Saiba mais",
						}}
					/>
				</S.SectionOneControlerStyled>
			</SelfArea>
		</G.ContainerStyled>
	);
};
