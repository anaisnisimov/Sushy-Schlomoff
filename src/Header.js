import React from 'react';
import waterdrop from './assets/waterdrop.mp4';
import './Header.scss';
import data from './data/data';
import Video from 'react-responsive-video';

const Header = () => {
	return (
		<div id="Header">
			<div id="Header-myVideo">
				<Video mp4={`${waterdrop}`} />
			</div>
			<div id="Header-header">
				<h1 id="Header-title">
					{data[0].navbarHome[0].name}
				</h1>
				<h2 id="Header-subtitle">
					{data[0].navbarHome[0].subtitle}
				</h2>
			</div>
		</div>
	);
};

export default Header;
