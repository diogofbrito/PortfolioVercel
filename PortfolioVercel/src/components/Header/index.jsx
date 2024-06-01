import React from 'react';
import './style.css';
import { NavLink, useLocation } from 'react-router-dom';
import { ToggleListButton } from '../ToggleListButton/index';
import { ToggleSwitch } from '../ThemeSwitch/index';


export function Header() {
	const location = useLocation();
	const isProjectsPage = location.pathname.startsWith('/projects');

	return (
		<div className='navbar'>
			<div className='container'>
				<div className='navbar__item'>
					<div>
						<NavLink className='item__flex' to='/'>
							Diogo Brito
						</NavLink>
					</div>

					<div style={{ display: 'flex', gap: '1rem', position: 'relative' }}>
						<NavLink className='item__flex' to='/about'>
							About
						</NavLink>
						<NavLink className='item__flex' to='/projects'>
							Work
						</NavLink>
						{isProjectsPage && <ToggleListButton />}
					</div>

					<ToggleSwitch />
				</div>
			</div>
		</div>
	);
}
