import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch.jsx';

export function HeaderHome() {
	

	return (
		<div className='navbarhome'>
			<div className='navlinks'>
				<NavLink to='/works' className='navlink' >
					Works
				</NavLink>

				<ThemeSwitch />
			</div>
		</div>
	);
}
