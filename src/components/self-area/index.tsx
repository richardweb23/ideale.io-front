import { ReactNode } from "react";
import * as S from "./styled";
export type SafeAreaType = "title" | "description";
interface Props {
	type?: SafeAreaType;
	title: string;
	description?: string;
	children: ReactNode;
	bg: string;
	icon?: JSX.Element;
}

export const SelfArea = ({
	children,
	title,
	description,
	bg,
	type = "description",
	icon,
}: Props) => {
	return (
		<S.SelfAreaStyled>
			<S.SelfAreaCollumnStyled bg={bg} type={type}>
				{icon ? (
					<div className="icon-controler">
						<div className="icon">{icon}</div>
						<h3 dangerouslySetInnerHTML={{ __html: title }} />
					</div>
				) : (
					<>
						<h3 dangerouslySetInnerHTML={{ __html: title }} />
						<p
							dangerouslySetInnerHTML={{
								__html: description || "",
							}}
						/>
					</>
				)}
			</S.SelfAreaCollumnStyled>
			<S.SelfAreaCollumnBoxStyled>{children}</S.SelfAreaCollumnBoxStyled>
		</S.SelfAreaStyled>
	);
};
