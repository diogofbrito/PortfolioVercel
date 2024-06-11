import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { ToggleSwitch } from '../ThemeSwitch/index';

export function Header({ headerRef }) {
	return (
		<div className='navbar container' ref={headerRef}>
			<div className='navbar__item'>
				<NavLink className='item__flex' to='/'>
					Diogo Brito
				</NavLink>

				<div style={{ display: 'flex', gap: '1rem' }}>
					<NavLink className='item__flex' to='/about'>
						About
					</NavLink>
					<NavLink className='item__flex' to='/work'>
						Work
					</NavLink>
				</div>

				<ToggleSwitch />
			</div>
		</div>
	);
}
