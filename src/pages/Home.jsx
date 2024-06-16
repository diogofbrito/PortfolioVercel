import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { HeaderHome } from '../components/Header/HeaderHome';

export function Home() {
	return (
		<div >
			<Link to='/works'>
				<Gallery />
			</Link>

			<div className='container'>
				<About />
			</div>
			<HeaderHome />
		</div>
	);
}
