import bg9 from "../../assets/bg9.jpg";
import { HeaderPages } from "../../components/header-pages";
import { CompetitivoIcon } from "../../components/icons/competitivo";
import { ModernizarIcon } from "../../components/icons/modernizar";
import { OmnichannelIcon } from "../../components/icons/omnichannel";
import { VendasIcon } from "../../components/icons/vendas";
import { SelfArea } from "../../components/self-area";
import { ContainerStyled } from "../../styled/GlobalStyles";

export const AppsPage = () => {
	return (
		<>
			<HeaderPages
				title="Transformamos hipóteses de <br /> negócio em produtos"
				subTitle="A maneira de consumir produtos e serviços mudou, e nós estamos prontos para te<br /> ajudar a se adequar. Do Discovery ao Delivery, nosso esforço é garantir o funcionamento<br /> da estratégia, seja ela focada no omnichannel ou na facilidade de uso do cliente."
			/>
			<ContainerStyled>
				<SelfArea
					title="Modernizar processo em clientes da base"
					icon={ModernizarIcon()}
					bg={bg9}
				>
					<p>
						Este é o principal motivo que encontramos em nossas
						demandas de desenvolvimento de apps em clientes.
						<br />
						Especialmente por que os projetos nascem de nossos
						clientes de Portal, interessados em facilitar o acesso
						de seus clientes a informação de seus produtos, e
						facilitar pedidos e assistência técnica.
					</p>
				</SelfArea>
				<SelfArea title="Omnichannel" icon={OmnichannelIcon()} bg={bg9}>
					<p>
						O omnichannel deixou de ser uma estratégia de
						diferenciação, e se tornou parte da expectativa do
						cliente. Nós desenvolvemos soluções mobile, respeitando
						rigorosamente a identidade visual da empresa, e
						integradas a mesma base de dados consumida pelo site e
						demais canais, assim garantimos que a navegação do
						cliente, da busca por uma solução a escolha, seja
						fluida, independente do canal que escolhe para iniciar e
						finalizar a compra. O consumo está no centro das
						decisões do desenvolvimento e a missão é criar fluxos
						convergente, que facilitem o fechamento.
					</p>
				</SelfArea>
				<SelfArea
					title="Diferenciais competitivos"
					icon={CompetitivoIcon()}
					bg={bg9}
				>
					<p>
						Na era da informação, o consumidor se habituou a
						resolver suas necessidades com poucos cliques. Nosso
						esforço no desenvolvimento mobile é criar soluções
						fáceis e realmente úteis. Do download de um boleto a
						abertura de um chamado, se o cliente entende que pode
						requisitar serviços de forma mais fácil, o preço do
						concorrente passa a ser menos importante.
					</p>
				</SelfArea>
				<SelfArea
					title="Impulsionar as vendas"
					icon={VendasIcon()}
					bg={bg9}
				>
					<p>
						E se seu cliente da base navegar por uma página de
						produto em seu site, e logo depois que ele a deixar
						receber um notificação push, com um artigo de um blog
						seu, falando dos benefícios deste produto? Ou melhor, e
						se esta notificação push o presentear com um desconto
						promocional, para comprar em 1 min, com poucos cliques
						pelo app? <br />
						Nós acreditamos na força dos app para impulsionar vendas
						e os desenvolvemos para serem poderosas ferramentas de
						marketing e negócio.
					</p>
				</SelfArea>
			</ContainerStyled>
		</>
	);
};
