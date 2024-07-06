import bg9 from "../../assets/bg9.jpg";
import { HeaderPages } from "../../components/header-pages";
import { BackendIcon } from "../../components/icons/backend";
import { ImpersonationIcon } from "../../components/icons/impersonation";
import { PersonalizacaoIcon } from "../../components/icons/personalizacao";
import { PortletsIcon } from "../../components/icons/portlets";
import { TemaIcon } from "../../components/icons/tema";
import { WebContentIcon } from "../../components/icons/web-content";
import { SelfArea } from "../../components/self-area";
import { ContainerStyled } from "../../styled/GlobalStyles";

export const Portais = () => {
	return (
		<>
			<HeaderPages
				title="Tecnologias de portal <br /> emancipam nossos clientes"
				subTitle="O marketing deu lugar ao growth marketing, e seu dinamismo de aproveitar o que
      acontece no mundo para impulsionar vendas não é compatível como processos  demorados de atualização de página, com a colaboração de programadores.<br /><br />
      Tecnologias de portal emancipam as equipes de content marketing e jornalismo, além
      de os ambientes de autoria darem segurança com um processo automático de
      requisição de autorização para publicação de atualizações.<br /><br />
      Somos especialistas em desenvolver portais há quase duas décadas e conhecemos
      todo universo de tecnologias, melhores práticas e capacidade de entrega."
			/>
			<ContainerStyled>
				<SelfArea
					title="Web Content Management"
					icon={WebContentIcon()}
					bg={bg9}
				>
					<p>
						Construimos sites utilizando as melhores práticas e o
						que há de mais moderno no HCL DX. <br />
						<br />
						Com a arquitetura e infraestrutura cloud ou premises e
						uma estrutura de servidores pensados na autoria de
						conteúdo de forma prática e rápida, tornamos a
						experiência de publicação de conteúdo fluída e simples.
					</p>
				</SelfArea>
				<SelfArea
					title="Desenvolvimento de Portlets"
					icon={PortletsIcon()}
					bg={bg9}
				>
					<p>
						Utilizamos as últimas melhorias na bridge do WAS e
						implementamos portlets JSR268 em todas as distribuições
						em JSF.
						<br />
						Com o HCL DX também é possível desenvolver portlet com
						os principais frameworks JAVA de mercado também.
					</p>
				</SelfArea>
				<SelfArea title="Tema" icon={TemaIcon()} bg={bg9}>
					<p>
						Construímos temas WebDav Based, customizados que atendam
						os desafios de negócio cada vez mais complexos.
						<br />
						Desenvolvemos o tema adaptado para os principais
						framework front end de mercado.
					</p>
				</SelfArea>
				<SelfArea title="Tema" icon={PersonalizacaoIcon()} bg={bg9}>
					<p>
						Com a API de personalização do HCL DX, entregamos
						conteúdo cada vez mais direcionado ao seu público alvo.
						<br />
						Personalizamos experiência do cliente de acordo com
						regras de negócio.
					</p>
				</SelfArea>
				<SelfArea title="Tema" icon={ImpersonationIcon()} bg={bg9}>
					<p>
						Através da API do impersonation, conseguimos simular a
						experiência do cliente facilitando assim testes,
						resolução de erros e etc.
					</p>
				</SelfArea>
				<SelfArea title="Tema" icon={BackendIcon()} bg={bg9}>
					<p>
						Desenvolvemos APIs nas principais linguagens do mercado,
						tornando possível a comunicação REST com os portlets,
						tornando o back end reutilizável para a apresentação dos
						dados em dispositivos mobile e outros.
					</p>
				</SelfArea>
			</ContainerStyled>
		</>
	);
};
