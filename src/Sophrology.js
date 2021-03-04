import React from 'react';
import './Sophrology.scss';
import assets from './assets/sophrology.png';

const Sophrology = () => {
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
		<div id="Sophrology">
			<div id="Sophrology-ContainerMenu">
				{/* @TODO faire un menu avec une croix et les possibilités de navigation (page externe qu'on appelle ici) */}
				<div id="Sophrology-ContainerMenuCircle">
					<figure id="Sophrology-FigureFullCircle-Menu">
						<svg viewBox={circleConfigMenu.viewBox}>
							<text textAnchor="middle" x="50" y="50" id="Sophrology-titleMenu">
								Sophrologie
							</text>
							<circle
								id="Sophrology-circleMenu"
								cx={circleConfigMenu.x}
								cy={circleConfigMenu.y}
								r={circleConfigMenu.radio}
							/>
						</svg>
					</figure>
					<figure id="Sophrology-FigureLineCircle-Menu">
						<svg viewBox={circleLineConfigMenu.viewBox}>
							<circle
								id="Sophrology-lineCircleMenu"
								cx={circleLineConfigMenu.x}
								cy={circleLineConfigMenu.y}
								r={circleLineConfigMenu.radio}
							/>
						</svg>
					</figure>
				</div>
			</div>
			<h2 id="Sophrology-subtitle">La sophrologie, numéro 1 dans la gestion du stress !</h2>
			<p id="Sophrology-underline" />
			<div id="Sophrology-ContainerBody">
				<div id="Sophrology-ContainerInfos">
					<div id="Sophrology-Container1">
						<div id="Sophrology-ContainerPourquoi">
							<h3 id="Sophrology-titleparagraph">Pourquoi ?</h3>
							<p id="Sophrology-paragraph">
								Se <span id="Sophrology-span">sentir mieux</span> dans sa tête, dans son corps et dans
								son coeur. La <span id="Sophrology-span"> Sophrologie</span> permet de{' '}
								<span id="Sophrology-span">lâcher prise </span>, d’<span id="Sophrology-span">évacuer</span>{' '}
								les tensions et le stress négatif, <span id="Sophrology-span">d’optimiser</span> ses
								ressources.
							</p>
							<p id="Sophrology-paragraph">
								<span id="Sophrology-span">Activer ses capacités</span> même insoupçonnées.
							</p>
							<p id="Sophrology-paragraph">
								<span id="Sophrology-span">Rétablir un équilibre</span> qui parfois s’étiole face au
								stress de la vie socio-professionnelle et familiale.
								<span id="Sophrology-span"> Harmoniser</span> son corps et son esprit,{' '}
								<span id="Sophrology-span">gérer</span> son stress,{' '}
								<span id="Sophrology-span">améliorer</span> sa santé, sa vie au quotidien.
							</p>
						</div>
					</div>

					<div id="Sophrology-Container2">
						<div id="Sophrology-ContainerPortrait">
							<img id="Sophrology-image" src={`${assets}`} alt="ArtPicture" />
							<figure id="Sophrology-FigureLineCircle">
								<svg viewBox={cicleLineConfig.viewBox}>
									<circle
										id="Sophrology-lineCircle"
										cx={cicleLineConfig.x}
										cy={cicleLineConfig.y}
										r={cicleLineConfig.radio}
									/>
								</svg>
							</figure>
						</div>

						<div id="Sophrology-ContainerPourQui">
							<h3 id="Sophrology-titleparagraph">Pour qui ?</h3>
							<ul id="Sophrology-ul">
								<li id="Sophrology-list">Futurs mamans</li>
								<li id="Sophrology-list">Enfants</li>
								<li id="Sophrology-list">
									Adultes: stress, développement personnel, angoisses, problèmes de sommeil…
								</li>
								<li id="Sophrology-list">Étudiants: préparation d’examens</li>
								<li id="Sophrology-list">Sportifs: préparation aux compétitions</li>
								<li id="Sophrology-list">Convalescents: après et avant une opération</li>
							</ul>
						</div>
					</div>
					<div id="Sophrology-Container3">
						<div id="Sophrology-ContainerComment">
							<div id="Sophrology-ContainerComment2">
								<h3 id="Sophrology-titleparagraph">Comment ?</h3>

								<p id="Sophrology-paragraph">
									<span id="Sophrology-span">La sophrologie</span> est fondée sur{' '}
									<span id="Sophrology-span">
										{' '}la respiration abdominale, la relaxation, le lâcher prise
									</span>. La<span id="Sophrology-span"> régularité</span> et la{' '}
									<span id="Sophrology-span">répétition</span> des séances corroborent aux effets
									<span id="Sophrology-span"> bénéfiques</span> de la sophrologie.
								</p>
								<p id="Sophrology-paragraph">
									Les séances se déroulent chaque semaine. En{' '}
									<span id="Sophrology-span">individuel</span>, pour des problématiques particulières.
									<span id="Sophrology-span"> En groupe</span> de relaxation dynamique pour la{' '}
									<span id="Sophrology-span">gestion de stress</span>, le{' '}
									<span id="Sophrology-span">développement personnel</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sophrology;
