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
		<div className='navbarhome container' style={{ paddingBottom: '1rem' }}>
			<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
				<NavLink to='/works' className='navlink' onClick={scrollToTop}>
					Works
				</NavLink>

				<ThemeSwitch />
			</div>
		</div>
	);
}
