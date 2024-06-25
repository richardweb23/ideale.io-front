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
}

export const BoxDescription = ({
	title,
	description,
	button,
	type = "type-1",
}: Props) => {
	return (
		<S.BoxDescriptionStyled type={type}>
			<div className="icon"></div>
			<h2>{title}</h2>
			<p>{description}</p>
			{button?.onClick && <Button content={button.text} />}
		</S.BoxDescriptionStyled>
	);
};
