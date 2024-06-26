import logo1 from "../../assets/logos/abastece_ai.webp";
import logo2 from "../../assets/logos/ipiranga.webp";
import logo3 from "../../assets/logos/magna.webp";
import logo4 from "../../assets/logos/mrm2.webp";
import logo5 from "../../assets/logos/hcl_software_business_partner_q.webp";
import logo6 from "../../assets/logos/logo_partner_ibm_fondo_azul_Mesa de trabajo 1_edited.webp";
import logo7 from "../../assets/logos/HCL_Digital_Experience_Master.webp";
import logo8 from "../../assets/logos/HCL_Commerce_Master.webp";
import logo9 from "../../assets/logos/hcl-technologies_multichannel-marketing-hubs_1602864599265.webp";
import * as G from "../../styled/GlobalStyles";
import * as S from "./styled";

export const SectionClients = () => {
	return (
		<G.ContainerStyled>
			<S.SectionClientsControlerStyled>
				<h1>Nossos clientes</h1>
				<S.ControlerLogosStyled>
					<div className="logo">
						<img
							src={logo1}
							width={100}
							height={100}
							alt="Abastece aí"
							title="Abastece aí"
						/>
					</div>
					<div className="logo">
						<img
							src={logo2}
							width={175}
							height={54}
							alt="Ipiranga"
							title="Ipiranga"
						/>
					</div>
					<div className="logo">
						<img
							src={logo3}
							width={165}
							height={100}
							alt="Magna Sistemas"
							title="Magna Sistemas"
						/>
					</div>
					<div className="logo">
						<img
							src={logo4}
							width={164}
							height={100}
							alt="MRM"
							title="MRM"
						/>
					</div>
				</S.ControlerLogosStyled>
				<S.DescriptionClientsStyled>
					<div className="logo">
						<img
							src={logo5}
							width={206}
							alt="HCL Software"
							title="HCL Software"
						/>
					</div>
					<div className="column">
						<p>
							Somos parceiros HCL e especialistas em HCL CX (
							<a
								href="https://www.google.com/search?rlz=1C1CHZN_pt-BRBR951BR951&sxsrf=ALiCzsbY-rZ4ica60HwHk1YgggbBsLIuig:1662243699201&q=Customer+Experience&spell=1&sa=X&ved=2ahUKEwi6gOKp1Pn5AhUispUCHakTCpQQkeECKAB6BAgCEDs"
								target="_blank"
								rel="noreferrer"
							>
								Customer Experience
							</a>
							). As tecnologias HCL fazem parte de nosso portfólio
							desde quando ainda pertencia a IBM, de onde vêm
							nossa experiência nas mais diversas versões da
							tecnologia.
						</p>
						<div className="list-products">
							<div className="product">
								<img src={logo7} width={62} height={62} />
								<p>
									HCL
									<br />
									Digital Experience
								</p>
							</div>
							<div className="product">
								<img src={logo8} width={62} height={62} />
								<p>
									HCL
									<br />
									Commerce
								</p>
							</div>
							<div className="product">
								<img src={logo9} width={62} height={62} />
								<p>
									HCL
									<br />
									Unica
								</p>
							</div>
						</div>
					</div>
				</S.DescriptionClientsStyled>
				<S.DescriptionClientsStyled>
					<div className="logo">
						<img
							src={logo6}
							width={206}
							height={82}
							alt="IBM"
							title="IBM"
						/>
					</div>
					<div className="column">
						<p>
							Na Ideale, somos especialistas em soluções IBM há
							mais de 15 anos, abrangendo todo o ciclo, desde a
							venda até a implantação. Nossas equipes dedicadas
							estão sempre prontas para personalizar soluções de
							acordo com suas necessidades, garantindo o sucesso
							de seus projetos.
						</p>
					</div>
				</S.DescriptionClientsStyled>
			</S.SectionClientsControlerStyled>
		</G.ContainerStyled>
	);
};
