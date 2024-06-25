import { Button } from "../buttons/button";

import * as S from "./styled";

interface Props {
	title: string;
	description: string;
	type?: S.BoxDescriptionStyledProps["type"];
	button?: {
		onClick?: () => void;
		text?: string;
	};
	icon?: JSX.Element;
	top?: string;
}

export const BoxDescription = ({
	title,
	description,
	button,
	type = "type-1",
	icon,
	top = "0",
}: Props) => {
	return (
		<S.BoxDescriptionStyled type={type} top={top}>
			{icon && type === "type-1" && <div className="icon">{icon}</div>}
			<h2 dangerouslySetInnerHTML={{ __html: title }} />
			<p>{description}</p>
			{button?.onClick && <Button content={button.text} />}
			{type === "type-1" && <div className="fio" />}
			{icon && type === "type-2" && <div className="icon">{icon}</div>}
		</S.BoxDescriptionStyled>
	);
};
