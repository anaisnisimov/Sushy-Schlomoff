import React from 'react';
import './Seances.scss';
import assets from './assets/lotus.png';

const Seances = () => {
	const circleLineConfigMenu = {
		viewBox: '0 0 100 100',
		x: '50',
		y: '50',
		radio: '45px',
	};
	const circleConfigMenu = {
		viewBox: '0 0 100 100',
		x: '50',
		y: '50',
		radio: '45px',
	};
	const cicleLineConfig = {
		viewBox: '0 0 100 100',
		x: '50',
		y: '50',
		radio: '50px',
	};

	return (
		<div id="Seances">
			<div id="Seances-ContainerMenu">
				{/* @TODO faire un menu avec une croix et les possibilités de navigation (page externe qu'on appelle ici) */}
				<div id="Seances-ContainerMenuCircle">
					<figure id="Seances-FigureFullCircle-Menu">
						<svg viewBox={circleConfigMenu.viewBox}>
							<text textAnchor="middle" x="50" y="50" id="Seances-titleMenu">
								Séances
							</text>
							<circle
								id="Seances-circleMenu"
								cx={circleConfigMenu.x}
								cy={circleConfigMenu.y}
								r={circleConfigMenu.radio}
							/>
						</svg>
					</figure>
					<figure id="Seances-FigureLineCircle-Menu">
						<svg viewBox={circleLineConfigMenu.viewBox}>
							<circle
								id="Seances-lineCircleMenu"
								cx={circleLineConfigMenu.x}
								cy={circleLineConfigMenu.y}
								r={circleLineConfigMenu.radio}
							/>
						</svg>
					</figure>
				</div>
			</div>
			<div id="Seances-ContainerBody">
				<div id="Seances-ContainerInfos">
					<h2 id="Seances-subtitle">Les séances sont dispensées par Suzy Nisimov-Schlomoff</h2>
					<p id="Seances-underline" />
					<div id="Seances-Container1">
						<div id="Seances-ContainerPourquoi">
							<h3 id="Seances-titleparagraph">Pour sportifs et étudiants</h3>
							<p id="Seances-paragraph">
								Préparations aux compétitions ou examen. Lâcher prise, évacuation des tensions
								musculaires et psychologiques, activation vitale, mobilisation du positif, amélioration
								de la concentration, gestion du stress dû à la pression de l’épreuve, de l’entourage.
								Activation de la motivation, techniques de futurisation : vécu positif d’événements
								futurs.
							</p>

							<h3 id="Seances-titleparagraph">Mini stages découvertes</h3>
							<p id="Seances-paragraph">
								Ciblés sur le stress ou le sommeil ou la douleur ou le 1er degré. Les techniques clés
								sont abordées (lâcher prise, évacuation des tensions, mobilisation du positif,
								activationvitale), plus une technique spécifiqueau thème choisi/
							</p>
							<h3 id="Seances-titleparagraph">Pour futures mamans</h3>
							<p id="Seances-paragraph">
								Vivre toute la période avant, pendant et après la naissance du bébé, le plus sereinement
								et positivement. Se débarasser des petits maux liés à la grossesse. Etre active lors de
								son accouchement au lieu de le subir( accompagnement des contractions qui ouvrent le
								col…) Commencer le plus tôt possible (vers le 3eme ou 4eme mois)
							</p>
						</div>
						<div id="Seances-ContainerPourQui">
							<h3 id="Seances-titleparagraph">Pour enfants</h3>
							<p id="Seances-paragraph">
								Sophrologie ludique Adaptée aux enfants avec des petits jeux (sophro bataille avec des
								coussins) Histoires Prise de conscience du corps, de l’espace, du mouvement, du
								relâchement musculaire, des 5sens, évacuation des tensions. Développe l’écoute,
								l’attention, la concentration, l’imaginaire. Dessin en fin de séance, ou petit exercice
								d’écriture pour s’améliorer et voir qu’il est possible de réaliser ce qui peut causer
								des soucis en classe!
							</p>
							<h3 id="Seances-titleparagraph"> Pour adultes</h3>
							<p id="Seances-paragraph">
								Pratique des quatres premier degrés Sur l’année (il existe douze degrés de relaxation
								dynamique Caycédienne (RDC) Le 1 er degré, axé sur le travail de perception du corps à
								l’aide de quelques mouvements très doux et calmes. Le 2eme sur le mental Le 3eme sur la
								rencontre des deux (harmonie corps / esprit) Le 4eme sur les valeurs de l’être
							</p>
							<h3 id="Seances-titleparagraph">Pour entreprise </h3>
							<p id="Seances-paragraph">
								Vous constituez un petit groupe, un local est à votre disposition.
							</p>
						</div>
					</div>

					<div id="Seances-Container2">
						<div id="Seances-ContainerPortrait">
							<img id="Seances-image" src={`${assets}`} alt="ArtPicture" />
							<figure id="Seances-FigureLineCircle">
								<svg viewBox={cicleLineConfig.viewBox}>
									<circle
										id="Seances-lineCircle"
										cx={cicleLineConfig.x}
										cy={cicleLineConfig.y}
										r={cicleLineConfig.radio}
									/>
								</svg>
							</figure>
						</div>
					</div>
					<p id="Seances-underline" />
				</div>
			</div>
		</div>
	);
};

export default Seances;
