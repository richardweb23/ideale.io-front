import * as S from "./styled";

interface Props {
	title: string;
	description: string;
}

export const BoxNumbers = ({ title, description }: Props) => {
	return (
		<S.BoxNumbersStyled>
			<h2>{title}</h2>
			<p>{description}</p>
			<div className="fio" />
		</S.BoxNumbersStyled>
	);
};
