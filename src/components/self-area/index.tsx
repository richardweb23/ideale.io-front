import { ReactNode } from "react";
import * as S from "./styled";
export type SafeAreaType = "title" | "description";
interface Props {
	type?: SafeAreaType;
	title: string;
	description?: string;
	children: ReactNode;
	bg: string;
}

export const SelfArea = ({
	children,
	title,
	description,
	bg,
	type = "description",
}: Props) => {
	return (
		<S.SelfAreaStyled>
			<S.SelfAreaCollumnStyled bg={bg} type={type}>
				<h3 dangerouslySetInnerHTML={{ __html: title }} />
				<p dangerouslySetInnerHTML={{ __html: description || "" }} />
			</S.SelfAreaCollumnStyled>
			<S.SelfAreaCollumnBoxStyled>{children}</S.SelfAreaCollumnBoxStyled>
		</S.SelfAreaStyled>
	);
};
