import React from 'react';
import { NavLink } from 'react-router-dom';

export function ToggleListButton() {
	return (
		<>
			<NavLink className='item__flex' to='/projects/index'>
				List
			</NavLink>
		</>
	);
}
