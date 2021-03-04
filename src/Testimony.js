import React, { useState } from 'react';
import './Testimony.scss';
import data from './data/data';
import assets from './assets/feuille.png';
import left from './assets/SVG/left.svg';
import right from './assets/SVG/right.svg';

const Testimony = () => {
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
		<div id="Testimony">
			<div id="Testimony-ContainerMenu">
				<div id="Testimony-ContainerMenuCircle">
					<figure id="Testimony-FigureFullCircle-Menu">
						<svg viewBox={circleConfigMenu.viewBox}>
							<text textAnchor="middle" x="50" y="50" id="Testimony-titleMenu">
								Témoignages
							</text>
							<circle
								id="Testimony-circleMenu"
								cx={circleConfigMenu.x}
								cy={circleConfigMenu.y}
								r={circleConfigMenu.radio}
							/>
						</svg>
					</figure>
					<figure id="Testimony-FigureLineCircle-Menu">
						<svg viewBox={circleLineConfigMenu.viewBox}>
							<circle
								id="Testimony-lineCircleMenu"
								cx={circleLineConfigMenu.x}
								cy={circleLineConfigMenu.y}
								r={circleLineConfigMenu.radio}
							/>
						</svg>
					</figure>
				</div>
			</div>
			<div id="Testimony-ContainerBody">
				<div id="Testimony-ContainerInfos">
					<div id="Testimony-containerArrayLeft">
						<img id="Testimony-array" src={`${left}`} alt="left" />
					</div>
					<div id="Testimony-ContainerParagraph">
						<p id="Testimony-paragraph">
							Quand la réflexologie se pratique assidument, avec persévérance et régularité : elle fait
							faire un <span id="Testimony-span">beau voyage</span>, sans limite,{' '}
							<span id="Testimony-span">pour soi</span>, qui laisse que{' '}
							<span id="Testimony-span">du plaisir</span>. Après chaque séance, on est tout simplement{' '}
							<span id="Testimony-span">apaisé</span> et <span id="Testimony-span">bien.</span>
						</p>
						<p id="Testimony-paragraphSign">
							Témoignage d’une <span id="Testimony-span">Personne</span>, qui a essayé et qui en a
							apprécié <span id="Testimony-span">les bienfaits</span>
						</p>
					</div>
					<div id="Testimony-ContainerPortrait">
						<img id="Testimony-image" src={`${assets}`} alt="ArtPicture" />
						<div id="Testimony-containerArrayRight">
							<img id="Testimony-array" src={`${right}`} alt="right" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimony;
