import React from 'react';
import './sideDrawer.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class SideDrawer extends React.Component {
	render() {
		return (
			<nav id="sideDrawer">
				<div id="sideDrawer-logo" />
				<div id="sideDrawer-spacer" />
				<div id="sideDrawer-navigationItems">
					<ul>
						<li>
							<AnchorLink offset={() => 200} id="sideDrawer-navlink" href="#home">
								Accueil
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset={() => 110} id="sideDrawer-navlink" href="#about">
								À propos
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#reflexology">
								Réflexologie
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#sophrology">
								Sophrologie
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#temoignages">
								Témoignages
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#seances">
								Séances
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#infos">
								Infos Pratiques
							</AnchorLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default SideDrawer;
