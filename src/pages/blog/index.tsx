import * as S from "./styled";
import { HeaderPages } from "../../components/header-pages";
import { CallArticles } from "../../components/call-articles";
import { Articles } from "../../articles";

export const BlogPage = () => {
	return (
		<>
			<HeaderPages title="Blog" />
			<S.BlogController>
				{Articles.map((article) => (
					<CallArticles
						key={article.id}
						id={article.id}
						title={article.title}
						date={article.date}
						call={article.call}
					/>
				))}
			</S.BlogController>
		</>
	);
};
