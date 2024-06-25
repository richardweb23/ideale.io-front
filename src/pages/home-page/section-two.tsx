import * as S from "./styled";
import bg3 from "../../assets/bg3.webp";
import * as G from "../../styled/GlobalStyles";
import { BoxDescription } from "../../components/box-description";

export const SectionTwo = () => {
	return (
		<G.ContainerStyled>
			<S.SectionStyled>
				<S.CollumnStyled bg={bg3}>
					<h3>Método Ideale de Gestão</h3>
					<p>
						Nossa Gestão de Projetos tem como base o
						comprometimento, comunicação e controle, trazendo
						transparência nas entregas e foco no resultado. Nossas
						entregas sempre respeitam nossos procedimentos
						operacionais padrão, ou impulsionam a criação de um,
						assim garantimos nosso padrão de qualidade em todas as
						squads e entregas.
					</p>
				</S.CollumnStyled>
				<S.CollumnBoxStyled>
					<BoxDescription
						type="type-2"
						title="1 Assessment"
						description="Estudamos todos os cenários, e desenhamos um relatório que servirá como um mapa para o sucessos das entregas."
					/>
					<BoxDescription
						type="type-2"
						title="2 Planejamento"
						description="Traçamos a melhor solução e montamos um cronograma completo com o roadmap do projeto."
					/>
					<BoxDescription
						type="type-2"
						title="3 Kickoff"
						description="Apresentamos o time que atuará, os canais de comunicação e o roadmap do projeto."
					/>
					<BoxDescription
						type="type-2"
						title="4 Setup do Projeto"
						description="Acessos ao ambiente, refinamento das features e invites para as cerimônias do projeto (Dailys, Checkpoint e Reviews)."
					/>
					<BoxDescription
						type="type-2"
						title="5 Execução"
						description="Hora da mão na massa. Criação e disponibilização dos entregáveis do projeto."
					/>
					<BoxDescription
						type="type-2"
						title="6 Delivery"
						description="Parte de nosso conjuntos de cerimônias é apresentar todas as entregas realizadas, a cada ciclo."
					/>
					<BoxDescription
						type="type-2"
						title="7 Phase-Out e Sustentação"
						description="Treinamento e passagem de conhecimento técnico + vigência de sustentação."
					/>
				</S.CollumnBoxStyled>
			</S.SectionStyled>
		</G.ContainerStyled>
	);
};
