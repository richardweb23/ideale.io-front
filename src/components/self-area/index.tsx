import { ReactNode } from "react";
import * as S from "./styled";

interface Props {
	title: string;
	description: string;
	children: ReactNode;
	bg: string;
}

export const SelfArea = ({ children, title, description, bg }: Props) => {
	return (
		<S.SelfAreaStyled>
			<S.SelfAreaCollumnStyled bg={bg}>
				<h3 dangerouslySetInnerHTML={{ __html: title }} />
				<p dangerouslySetInnerHTML={{ __html: description }} />
			</S.SelfAreaCollumnStyled>
			<S.SelfAreaCollumnBoxStyled>{children}</S.SelfAreaCollumnBoxStyled>
		</S.SelfAreaStyled>
	);
};
