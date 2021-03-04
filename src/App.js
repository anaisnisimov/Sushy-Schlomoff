import React from 'react';
import './App.scss';
import Navbar from './Navbar.js';
import About from './About.js';
import Reflexology from './Reflexology.js';
import Sophrology from './Sophrology.js';
import Seances from './Seances.js';
import PraticalesInfos from './PraticalesInfos.js';
import Testimony from './Testimony.js';
import Header from './Header.js';
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';
class App extends React.Component {
	state = {
		sideDrawerOpen: false,
	};

	// function to change the state of the click of the navbar
	drawerToggleClickHandler = () => {
		this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	render() {
		const { sideDrawerOpen } = this.state;
		let backdrop;
		let sideDrawer;

		// condition for responsive navbar
		if (sideDrawerOpen) {
			sideDrawer = <SideDrawer />;
			backdrop = <Backdrop clickClose={this.backdropClickHandler} />;
		}

		return (
			<div id="App">
				<header id="nav">
					<Navbar drawerClickHandler={this.drawerToggleClickHandler} />
					{sideDrawer}
					{backdrop}
				</header>
				<main id="main">
					<section id="home">
						<Header />
					</section>
					<section id="about">
						<About />
					</section>
					<section id="reflexology">
						<Reflexology />
					</section>
					<section id="sophrology">
						<Sophrology />
					</section>
					<section id="temoignages">
						<Testimony />
					</section>
					<section id="seances">
						<Seances />
					</section>
					<section id="infos">
						<PraticalesInfos />
					</section>
				</main>
			</div>
		);
	}
}

export default App;
