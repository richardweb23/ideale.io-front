import bg7 from "../../assets/bg7.jpg";
import bg8 from "../../assets/bg8.jpg";

import { HeaderPages } from "../../components/header-pages";
import { SelfArea } from "../../components/self-area";
import { ContainerStyled } from "../../styled/GlobalStyles";

export const QuemSomos = () => {
	return (
		<>
			<HeaderPages
				title="Nossa missão"
				subTitle="Desenvolver software de alto padrão, de maneira</br /> otimizada,  transparente e sob alto rigor de qualidade,</br />  para facilitar o dia a dia de trabalho de nossos clientes e</br /> facilitar a relação de compra de seus clientes."
			/>
			<ContainerStyled>
				<SelfArea type="title" title="Nossa história" bg={bg7}>
					<p>
						Fundada em 2018 com objetivo claro de ser ser um braço
						forte para a HCL LATAM, condensando em um só time a
						experiência de quase duas décadas de seus fundadores em
						CX e cultura de qualidade.
						<br />
						<br />A proposta era dar aos clientes HCL um discurso
						melhor relacionado com as demandas de marketing.
						Diferente de como outras empresas entregam serviços de
						portal, nossa ideia foi estar habilitados para discutir
						tecnologia, do discovery e delivery, carimbando todos as
						nossas entregas com nossa padrão de gestão de qualidade.
						<br />
						<br />O ambiente inovador e aderente a novas tecnologias
						de apoio, e a estrutura de gestão horizontal e
						descentralizada, adotada para a Ideale,
						propositadamente, faz de nossos colaboradores e
						parceiros, líderes de suas tarefas e responsáveis pelo
						sucesso do serviço como um todo. E é assim que
						acreditamos ser possível crescer, garantido a mesma
						qualidade, o mesmo espírito jovem e acelerado, e a mesma
						importância em cada cliente.
						<br />
						<br />
						Nossos diretores, gerentes e líderes foram
						estrategicamente escolhidos, para trazerem consigo todo
						know-how necessário para o pleno andamento e conclusão
						dos contratos. Cada um com sua história e experiências,
						faz da Idelae uma empresa competente, grande em seus
						propósitos, e sólida em suas decisões.
					</p>
				</SelfArea>
				<SelfArea type="title" title="Visão e Valores" bg={bg8}>
					<p>
						<strong>Visão</strong>
						<br /> Sermos reconhecidos como a maior software de
						entrega de cultura e qualidade e tecnologias de portal
						do mundo.
						<br />
						<br />
						<strong>Valores</strong>
						<br />
						- Foco no cliente: Construímos relações duradouras com
						nossos clientes.
						<br />
						- Corretude: Sempre entregamos o que prometemos.
						<br />
						- Pontualidade: Valorizamos processos bem definidos,
						para que a execução seja precisa e os prazos garantidos.
						<br />
						- Espírito de Excelência: Estamos em movimento
						constante, para ter os colaboradores mais bem treinados,
						as melhores ferramentas de trabalho, e o que há de
						melhor em tecnologias de apoio.
						<br />- Pessoas: Acreditamos no indivíduo, único, e na
						força que há em descobrir, juntamente, quem ele é e faz
						de melhor.
					</p>
				</SelfArea>
			</ContainerStyled>
		</>
	);
};
