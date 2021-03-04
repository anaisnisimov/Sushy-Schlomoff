import React from 'react';
import './Reflexology.scss';
import assets from './assets/reflexologie.png';

const Reflexology = () => {
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
		<div id="Reflexology">
			<div id="Reflexology-ContainerMenu">
				{/* @TODO faire un menu avec une croix et les possibilités de navigation (page externe qu'on appelle ici) */}
				<div id="Reflexology-ContainerMenuCircle">
					<figure id="Reflexology-FigureFullCircle-Menu">
						<svg viewBox={circleConfigMenu.viewBox}>
							<text textAnchor="middle" x="50" y="50" id="Reflexology-titleMenu">
								Réflexologie
							</text>
							<circle
								id="Reflexology-circleMenu"
								cx={circleConfigMenu.x}
								cy={circleConfigMenu.y}
								r={circleConfigMenu.radio}
							/>
						</svg>
					</figure>
					<figure id="Reflexology-FigureLineCircle-Menu">
						<svg viewBox={circleLineConfigMenu.viewBox}>
							<circle
								id="Reflexology-lineCircleMenu"
								cx={circleLineConfigMenu.x}
								cy={circleLineConfigMenu.y}
								r={circleLineConfigMenu.radio}
							/>
						</svg>
					</figure>
				</div>
			</div>
			<h2 id="Reflexology-subtitle">La réflexologie s’adresse à tous ceux en quête de bien être</h2>
			<p id="Reflexology-underline" />
			<div id="Reflexology-ContainerBody">
				<div id="Reflexology-ContainerInfos">
					<div id="Reflexology-Container1">
						<div id="Reflexology-ContainerPourquoi">
							<h3 id="Reflexology-titleparagraph">Pourquoi ?</h3>
							<p id="Reflexology-paragraph">
								C’est une <span id="Reflexology-span"> thérapie manuelle</span>, employée depuis
								plusieurs millénaires, datant de l’Egypte ancienne, qui permet non seulement une{' '}
								<span id="Reflexology-span"> profonde détente </span>, mais également un{' '}
								<span id="Reflexology-span"> meilleur </span> fonctionnement de l’organisme.
							</p>
							<p id="Reflexology-paragraph">
								Le corps est une <span id="Reflexology-span"> unité dynamique </span>, doué d’<span id="Reflexology-span"> intelligence </span>{' '}
								et capable <span id="Reflexology-span"> d’autorégulation</span>, il recherche en
								permanence
								<span id="Reflexology-span"> l’équilibre </span> de toutes ses fonctions (appelé{' '}
								<span id="Reflexology-span"> homéostasie</span>).
							</p>
							<p id="Reflexology-paragraph">
								Afin de <span id="Reflexology-span"> vivre le mieux possible </span> quelles que soient
								les circonstances (instinct de survie). Il existe donc des{' '}
								<span id="Reflexology-span"> zones réflexes</span> sous la plante du pied, correspondant
								aux différentes régions du corps et leur utilisation à des{' '}
								<span id="Reflexology-span"> fins thérapeutiques </span> sont connus depuis près de
								5000ans.
							</p>
						</div>
					</div>

					<div id="Reflexology-Container2">
						<div id="Reflexology-ContainerPortrait">
							<img id="Reflexology-image" src={`${assets}`} alt="ArtPicture" />
							<figure id="Reflexology-FigureLineCircle">
								<svg viewBox={cicleLineConfig.viewBox}>
									<circle
										id="Reflexology-lineCircle"
										cx={cicleLineConfig.x}
										cy={cicleLineConfig.y}
										r={cicleLineConfig.radio}
									/>
								</svg>
							</figure>
						</div>

						<div id="Reflexology-ContainerPourQui">
							<h3 id="Reflexology-titleparagraph">Pour qui ?</h3>
							<p id="Reflexology-paragraph">
								Comme d’autres <span id="Reflexology-span">médecines naturelles</span>, la{' '}
								<span id="Reflexology-span"> réflexologie </span> permet{' '}
								<span id="Reflexology-span">
									{' '}d’augmenter la vitalité, favoriser l’élimination des toxines, harmoniser la
									circulation sanguine, lympathique, et nerveuse.
								</span>
							</p>
							<p id="Reflexology-paragraph">
								Elle vise à <span id="Reflexology-span">aider l’organisme </span>à effectuer ses
								fonctions et permet de <span id="Reflexology-span">soulager de nombreux maux</span> dont
								beaucoup de personnes souffrent quotidiennement : migraine, constipation, insomnie, mal
								de dos, hypertension, arthrite, bronchite chronique, règles douloureuses, ballonnements,
								crises d’asthme, calculs rénaux, troubles hormonaux, colopathies, blocage musculaires,
								troubles endocriniens, sciatique...
							</p>
						</div>
					</div>
					<div id="Reflexology-Container3">
						<div id="Reflexology-ContainerComment">
							<div id="Reflexology-ContainerComment2">
								<h3 id="Reflexology-titleparagraph">Comment ?</h3>

								<p id="Reflexology-paragraph">
									{' '}La plante des pieds constitue la{' '}
									<span id="Reflexology-span">représentation géographique</span> de chaque zone,
									chaque organe de notre corps. C’est{' '}
									<span id="Reflexology-span">en massant la plante des pieds</span> selon cette
									cartographie que la circulation sanguine, lymphatique, nerveuse est réactivée. Cela{' '}
									<span id="Reflexology-span">favorise</span> de meilleurs échanges physiologiques,
									biologiques, métaboliques.
								</p>
								<p id="Reflexology-paragraph">
									Plus exactement, <span id="Reflexology-span">la réflexologie</span> transmet à
									l’organisme les forces <span id="Reflexology-span">biochimiques</span> et{' '}
									<span id="Reflexology-span">bioénergétiques</span> nécessaires à son{' '}
									<span id="Reflexology-span">autorégulation</span>. Elle lui donne les moyens de
									retrouver ses <span id="Reflexology-span">facultés d’auto-guérison</span>.
								</p>
								<p id="Reflexology-paragraph">
									Seul, <span id="Reflexology-span">l’organisme </span>lui-même est capable de
									maintenir ou de retrouver <span id="Reflexology-span">l’homéostasie</span>{' '}
									(recherche de l’équilibre). C’est ce qui se produit dans les{' '}
									<span id="Reflexology-span">mécanismes de cicatrisation</span> ou les{' '}
									<span id="Reflexology-span">mécanismes immunitaires</span> mis en jeu lors d’une
									infection.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reflexology;
