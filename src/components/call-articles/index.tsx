import { useNavigate } from "react-router-dom";
import * as S from "./styled";
export type Props = {
	date: string;
	title: string;
	call: string;
	id: string;
};
export const CallArticles = ({ date, title, call, id }: Props) => {
	const navigate = useNavigate();
	return (
		<S.CallArticleStyled onClick={() => navigate(`/blog/${id}`)}>
			<div className="date">{date}</div>
			<div className="title">{title}</div>
			<div className="call">{call}</div>
		</S.CallArticleStyled>
	);
};
