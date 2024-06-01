import React from 'react';
import { Copyright } from 'lucide-react';
import './style.css';
import { NavLink } from 'react-router-dom';

export function Footer() {

	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer__item'>
					<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
						<Copyright size={16} /> 2024 Diogo Brito
					</div>

					<a href='diogobrito74@gmail.com'>Send email</a>
				</div>
			</div>
		</div>
	);
}
