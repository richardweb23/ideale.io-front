import bg3 from "../../assets/bg3.png";
import * as G from "../../styled/GlobalStyles";
import { BoxDescription } from "../../components/box-description";
import { SelfArea } from "../../components/self-area";
import * as S from "./styled";
import {
	ExecutionIcon,
	KeyboardIcon,
	LampIcon,
	MedalIcon,
	PencilIcon,
	PeopleIcon,
	RocketIcon,
} from "../../components/icons";

export const SectionTwo = () => {
	return (
		<G.ContainerStyled>
			<SelfArea
				title="Método Ideale de Gestão"
				description="Nossa Gestão de Projetos tem como base o
						comprometimento, comunicação e controle, trazendo
						transparência nas entregas e foco no resultado. Nossas
						entregas sempre respeitam nossos procedimentos
						operacionais padrão, ou impulsionam a criação de um,
						assim garantimos nosso padrão de qualidade em todas as
						squads e entregas."
				bg={bg3}
			>
				<S.SectionTwoControlerStyled>
					<BoxDescription
						icon={<LampIcon />}
						type="type-2"
						title="<span>1</span> Assessment"
						description="Estudamos todos os cenários, e desenhamos um relatório que servirá como um mapa para o sucessos das entregas."
					/>
					<BoxDescription
						icon={<PencilIcon />}
						type="type-2"
						title="<span>2</span> Planejamento"
						description="Traçamos a melhor solução e montamos um cronograma completo com o roadmap do projeto."
					/>
					<BoxDescription
						icon={<RocketIcon />}
						type="type-2"
						title="<span>3</span> Kickoff"
						description="Apresentamos o time que atuará, os canais de comunicação e o roadmap do projeto."
					/>
					<BoxDescription
						icon={<KeyboardIcon />}
						type="type-2"
						title="<span>4</span> Setup do Projeto"
						description="Acessos ao ambiente, refinamento das features e invites para as cerimônias do projeto (Dailys, Checkpoint e Reviews)."
					/>
					<BoxDescription
						icon={<ExecutionIcon />}
						type="type-2"
						title="<span>5</span> Execução"
						description="Hora da mão na massa. Criação e disponibilização dos entregáveis do projeto."
					/>
					<BoxDescription
						icon={<MedalIcon />}
						type="type-2"
						title="<span>6</span> Delivery"
						description="Parte de nosso conjuntos de cerimônias é apresentar todas as entregas realizadas, a cada ciclo."
					/>
					<BoxDescription
						icon={<PeopleIcon />}
						type="type-2"
						title="<span>7</span> Phase-Out e Sustentação"
						description="Treinamento e passagem de conhecimento técnico + vigência de sustentação."
					/>
				</S.SectionTwoControlerStyled>
			</SelfArea>
		</G.ContainerStyled>
	);
};
