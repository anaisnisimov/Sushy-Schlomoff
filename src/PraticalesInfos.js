import React from 'react';
import './PraticalesInfos.scss';

const PraticalesInfos = () => {
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

	return (
		<div id="PraticalesInfos">
			<div id="PraticalesInfos-ContainerMenu">
				{/* @TODO faire un menu avec une croix et les possibilités de navigation (page externe qu'on appelle ici) */}
				<div id="PraticalesInfos-ContainerMenuCircle">
					<figure id="PraticalesInfos-FigureFullCircle-Menu">
						<svg viewBox={circleConfigMenu.viewBox}>
							<text textAnchor="middle" x="50" y="50" id="PraticalesInfos-titleMenu">
								Infos pratiques
							</text>
							<circle
								id="PraticalesInfos-circleMenu"
								cx={circleConfigMenu.x}
								cy={circleConfigMenu.y}
								r={circleConfigMenu.radio}
							/>
						</svg>
					</figure>
					<figure id="PraticalesInfos-FigureLineCircle-Menu">
						<svg viewBox={circleLineConfigMenu.viewBox}>
							<circle
								id="PraticalesInfos-lineCircleMenu"
								cx={circleLineConfigMenu.x}
								cy={circleLineConfigMenu.y}
								r={circleLineConfigMenu.radio}
							/>
						</svg>
					</figure>
				</div>
			</div>
			<div id="PraticalesInfos-ContainerBody">
				<div id="PraticalesInfos-ContainerInfos">
					<div id="PraticalesInfos-ContainerLeft">
						<h3 id="PraticalesInfos-titleparagraph">Contact</h3>

						<h3 id="PraticalesInfos-title">Lieux 1</h3>
						<p id="PraticalesInfos-paragraph">78 Avenue Montceleux 93420 Villepinte (petits groupes)</p>
						<h3 id="PraticalesInfos-title">Téléphone</h3>
						<p id="PraticalesInfos-paragraph">06 62 02 63 50 ou 09 50 58 63 50 </p>
						<h3 id="PraticalesInfos-title">Lieux 2</h3>
						<p id="PraticalesInfos-paragraph">35 Avenue Pasteur 93290 Tremblay en France</p>
					</div>

					<div id="PraticalesInfos-ContainerCenter">
						<h3 id="PraticalesInfos-titleparagraph">Séance</h3>
						<h4 id="PraticalesInfos-subtitle">
							La séance : <span id="PraticalesInfos-span">1 heure environ</span>
						</h4>

						<h3 id="PraticalesInfos-title">En groupe</h3>
						<p id="PraticalesInfos-paragraph"> 660€ Sur l'année ( soit 20€ la séance.)</p>
						<p id="PraticalesInfos-paragraph"> (facilité de paiement jusqu'à 10 fois)</p>

						<h3 id="PraticalesInfos-title">En individuel </h3>
						<p id="PraticalesInfos-paragraph"> 70 € la première séance et 65 € les suivantes. </p>
						<p id="PraticalesInfos-paragraph"> Enfant ( jusqu’à 10 ans) 32€</p>

						<h3 id="PraticalesInfos-title">Future maman en individuelle</h3>
						<p id="PraticalesInfos-paragraph"> 520€ 8 séances </p>

						<h3 id="PraticalesInfos-title">Future maman en groupe</h3>
						<p id="PraticalesInfos-paragraph"> 256€ 8 séances </p>
					</div>
					<div id="PraticalesInfos-ContainerRight">
						<h3 id="PraticalesInfos-titleparagraph"> Minis stages</h3>
						<h4 id="PraticalesInfos-subtitle"> Les minis stages se déclinent sur 4 fois 1 heure</h4>
						<h3 id="PraticalesInfos-title"> En groupe </h3>
						<p id="PraticalesInfos-paragraph">128€ les 4 séances ( soit 32€ la séance) </p>
						<p id="PraticalesInfos-paragraph">
							les 3 techniques clés plus une séance sur le 1 er degré ( travail sur le corps).
						</p>

						<h3 id="PraticalesInfos-title">En individuel</h3>
						<p id="PraticalesInfos-paragraph">260€</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PraticalesInfos;
