import { useParams } from "react-router-dom";
import * as S from "./styled";
import { Articles } from "../../articles";

export const ArticlePage = () => {
	const params = useParams<{ id: string }>();
	const { title, date, article } = Articles.filter(
		(e) => e.id === params.id
	)[0];
	return (
		<S.ArticlePageStyled>
			<article>
				<div className="date">{date}</div>
				<h1>{title}</h1>
				<div dangerouslySetInnerHTML={{ __html: article }} />
			</article>
		</S.ArticlePageStyled>
	);
};
