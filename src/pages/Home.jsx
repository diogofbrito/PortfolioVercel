import React from 'react';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';

export function Home() {
	return (
		<div className='container'>
			<Gallery />
			<About/>
		</div>
	);
}
