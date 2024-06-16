import React from 'react';
import { NavLink, } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch.jsx';

export function HeaderHome() {

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};


	return (
		<div className='navbarhome' >
			<div className='navlinks'>
				<NavLink to='/works' className='navlink' onClick={scrollToTop}>
					Works
				</NavLink>

				<ThemeSwitch />
			</div>
		</div>
	);
}
