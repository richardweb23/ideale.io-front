import { useFormik } from "formik";
import * as S from "./styled";
import * as G from "../../styled/GlobalStyles";
import { Button } from "../../components/buttons/button";

type FormProps = {
	firstName: string;
	lastName: string;
	email: string;
	company: string;
	cellphone: string;
	companyPosition: string;
};

export const FaleConosco = () => {
	const validate = (values: FormProps) => {
		const errors: Partial<FormProps> = {};
		if (!values.email) {
			errors.email = "Este campo é obrigatório!";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Adicione um email valido!";
		}
		return errors;
	};

	const formik = useFormik<FormProps>({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			company: "",
			cellphone: "",
			companyPosition: "",
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<S.FaleConoscoStyled id="contact">
			<div className="description">
				<h1>Fale conosco!</h1>
				<p>
					Av. Gustavo Adolfo, 1441 - Vila
					<br /> Gustavo - São Paulo / SP - 02209-001
					<br />
					<br />
					+55 21 98441-1407
					<br />
					contato@ideale.io
				</p>
			</div>
			<div className="form-controler">
				<form onSubmit={formik.handleSubmit}>
					<div className="column">
						<div className="field">
							<G.LabelStyled htmlFor="firstName">
								Nome
							</G.LabelStyled>
							<G.InputStyled
								id="firstName"
								name="firstName"
								type="text"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.firstName}
							/>
						</div>
						<div className="field">
							<G.LabelStyled htmlFor="lastName">
								Sobrenome
							</G.LabelStyled>
							<G.InputStyled
								id="lastName"
								name="lastName"
								type="text"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.lastName}
							/>
						</div>
						<div className="field">
							<G.LabelStyled htmlFor="email">
								*Email
							</G.LabelStyled>
							<G.InputStyled
								id="email"
								name="email"
								type="text"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								$errorColor={
									formik.errors.email?.length ? true : false
								}
							/>
							{formik.errors.email && (
								<div className="error">
									{formik.errors.email}
								</div>
							)}
						</div>
						<div className="field">
							<G.LabelStyled htmlFor="cellphone">
								Telefone
							</G.LabelStyled>
							<G.InputStyled
								id="cellphone"
								name="cellphone"
								type="text"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.cellphone}
							/>
						</div>
						<div className="field">
							<G.LabelStyled htmlFor="company">
								Empresa
							</G.LabelStyled>
							<G.InputStyled
								id="company"
								name="company"
								type="text"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.company}
							/>
						</div>
						<div className="field">
							<G.LabelStyled htmlFor="companyPosition">
								Cargo
							</G.LabelStyled>
							<G.InputStyled
								id="companyPosition"
								name="companyPosition"
								type="text"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.companyPosition}
							/>
						</div>
					</div>
					<Button type="submit" content="Enviar" />
				</form>
			</div>
		</S.FaleConoscoStyled>
	);
};
