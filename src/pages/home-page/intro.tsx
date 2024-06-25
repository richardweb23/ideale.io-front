import { Button } from "../../components/buttons/button";
import { RevealLeftRight } from "../../components/motions/RevealLeftRight";
import * as S from "./styled";

export const IntroPage = () => {
	return (
		<S.IntroPageStyled>
			<RevealLeftRight>
				<h1>
					Tecnologia para <br /> gerar e manter os{" "}
					<span>clientes</span> de nossos clientes
				</h1>
			</RevealLeftRight>
			<RevealLeftRight>
				<h2>
					Nosso trabalho é desenvolver tecnologias, sob alto rigor de
					qualidade e automação, para garantir que nossos{" "}
					<span>clientes</span> utilizem o que há mais moderno,
					performático e auto gerenciável, na geração de leads e
					manutenção de suas bases de clientes
				</h2>
			</RevealLeftRight>
			<RevealLeftRight>
				<Button content="Saiba Mais" />
			</RevealLeftRight>
		</S.IntroPageStyled>
	);
};
