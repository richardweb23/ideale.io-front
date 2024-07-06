import * as S from "./styled";

type Props = {
	title: string;
	subTitle: string;
};

export const HeaderPages = ({ title, subTitle }: Props) => {
	return (
		<S.HeaderPagesStyled>
			<h1 dangerouslySetInnerHTML={{ __html: title }} />
			<h2 dangerouslySetInnerHTML={{ __html: subTitle }} />
		</S.HeaderPagesStyled>
	);
};
