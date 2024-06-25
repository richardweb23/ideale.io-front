import { ComponentProps } from "react";
import * as S from "./styled";

type Props = ComponentProps<"button"> & {
	content?: string;
};

export const Button = ({ content, ...props }: Props) => {
	return <S.ButtonStyled {...props}>{content}</S.ButtonStyled>;
};
