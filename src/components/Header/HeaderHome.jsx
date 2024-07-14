import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch.jsx';

export function HeaderHome() {
	return (
		<div className='flex gap-1 justify-between'>
			<NavLink to='/works' className='h-9 px-2.5 bg-[#c5c5c5]/50 rounded-3xl flex justify-center items-center hover:bg-[#c5c5c5]/80 '>
				<span className='leading-3 p-2.5 flex items-end h-full'>Selected Projects</span>
			</NavLink>

			<ThemeSwitch />
		</div>
	);
}
