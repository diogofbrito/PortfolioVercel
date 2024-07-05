import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch.jsx';

export function HeaderHome() {
	return (
		<div className='flex gap-3 justify-center'>
			<NavLink to='/works' className='bg-[#c5c5c5]/50 rounded-custom py-2.6 px-4 flex items-center'>
				Works
			</NavLink>

			<ThemeSwitch />
		</div>
	);
}
