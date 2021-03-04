import React, { useState } from 'react';
import './About.scss';
import data from './data/data';
import assets from './assets/suzy.png';

const About = () => {
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
		<div id="About">
			<div id="About-ContainerMenu">
				<div id="About-ContainerMenuCircle">
					<figure id="About-FigureFullCircle-Menu">
						<svg viewBox={circleConfigMenu.viewBox}>
							<text textAnchor="middle" x="50" y="50" id="About-titleMenu">
								À propos
							</text>
							<circle
								id="About-circleMenu"
								cx={circleConfigMenu.x}
								cy={circleConfigMenu.y}
								r={circleConfigMenu.radio}
							/>
						</svg>
					</figure>
					<figure id="About-FigureLineCircle-Menu">
						<svg viewBox={circleLineConfigMenu.viewBox}>
							<circle
								id="About-lineCircleMenu"
								cx={circleLineConfigMenu.x}
								cy={circleLineConfigMenu.y}
								r={circleLineConfigMenu.radio}
							/>
						</svg>
					</figure>
				</div>
			</div>

			<div id="About-ContainerBody">
				<div id="About-ContainerInfos">
					<div id="About-ContainerParagraph">
						<div id="About-ContainerTitle">
							<h1 id="About-title">
								{data[0].navbarHome[0].name}
							</h1>
							<h2 id="About-subtitle">
								{data[0].about[0].title}
							</h2>
						</div>
						<p id="About-paragraph">
							Après un parcours dans différents domaines dont la décoration, la mode, le marketing,
							<span id="About-span"> Suzy Nisimov-Schlomoff</span> perçoit que, dans la plupart des
							secteurs professionnels, le stress est toujours très présent et la dimension des valeurs
							humaines est souvent masquée, ceci quelque soit la fonction hiérarchique des individus.
						</p>
						<p id="About-paragraph">
							{' '}La rencontre avec <span id="About-span"> la Sophrologie </span> est un des chemins qui
							conduit à instaurer plus de <span id="About-span"> bien être </span> et{' '}
							<span id="About-span"> d’humanisme </span> dans tous les domaines et étapes de la vie quels
							qu’ils soient.
						</p>
					</div>

					<div id="About-ContainerImage">
						<div id="About-ContainerPortrait">
							<img id="About-image" src={`${assets}`} alt="ArtPicture" />
							<figure id="About-FigureLineCircle">
								<svg viewBox={cicleLineConfig.viewBox}>
									<circle
										id="About-lineCircle"
										cx={cicleLineConfig.x}
										cy={cicleLineConfig.y}
										r={cicleLineConfig.radio}
									/>
								</svg>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
