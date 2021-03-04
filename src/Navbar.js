import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import DrawerToggleButton from './DrawerToggleButton';
import './Navbar.scss';
class NavBar extends React.Component {
	state = {
		sideDrawerOpen: false,
	};

	// function to change the state of the logo's overlay when we hover with the mouse
	HandleHover = () => {
		this.setState({ overlay: !this.state.overlay });
		// console.log('jechange');
	};

	// function to change the state of the click of the navbar
	drawerToggleClickHandler = () => {
		this.setState(prevState => {
			// console.log('jeclique', this.state.sideDrawerOpen);
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};
	render() {
		const { drawerClickHandler } = this.props;
		return (
			<header id="navbar">
				<nav id="navbar-navigation">
					<div>
						{/* we call the function click inside the component DrawerToggleButton */}
						<DrawerToggleButton click={drawerClickHandler} />
					</div>

					<div id="navbar-navigationItems">
						<ul>
							<li>
								<AnchorLink offset={() => 200} id="navbar-navlink" href="#home">
									Accueil
								</AnchorLink>
							</li>
							<li>
								<AnchorLink offset={() => 110} id="navbar-navlink" href="#about">
									À propos
								</AnchorLink>
							</li>
							<li>
								<AnchorLink offset={() => 100} id="navbar-navlink" href="#reflexology">
									Réflexologie
								</AnchorLink>
							</li>
							<li>
								<AnchorLink offset={() => 100} id="navbar-navlink" href="#sophrology">
									Sophrologie
								</AnchorLink>
							</li>
							<li>
								<AnchorLink offset={() => 100} id="navbar-navlink" href="#temoignages">
									Témoignages
								</AnchorLink>
							</li>
							<li>
								<AnchorLink offset={() => 100} id="navbar-navlink" href="#seances">
									Séances
								</AnchorLink>
							</li>
							<li>
								<AnchorLink offset={() => 100} id="navbar-navlink" href="#infos">
									Infos Pratiques
								</AnchorLink>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default NavBar;
