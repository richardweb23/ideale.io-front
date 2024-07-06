import { Button } from "../../components/buttons/button";
import { useScroll } from "../../components/hook/useScroll";
import * as S from "./styled";

export const IntroPage = () => {
	const { scrollTo } = useScroll();
	return (
		<S.IntroPageStyled>
			<h1>
				Tecnologia para <br /> gerar e manter os <span>clientes</span>{" "}
				de
				<br /> nossos clientes
			</h1>
			<h2>
				Nosso trabalho é desenvolver tecnologias, sob alto rigor de
				qualidade e automação, para garantir que nossos{" "}
				<span>clientes</span> utilizem o que há mais moderno,
				performático e auto gerenciável, na geração de leads e
				manutenção de suas bases de clientes
			</h2>
			<Button
				content="Saiba Mais"
				onClick={() => scrollTo("section-one")}
			/>
		</S.IntroPageStyled>
	);
};
