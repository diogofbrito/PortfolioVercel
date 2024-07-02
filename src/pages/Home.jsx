import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { HeaderHome } from '../components/Header/HeaderHome';
import { GalleryMobile } from '../components/GalleryMobile';

export function Home() {
	return (
		<>
			<div className='container'>
				<Link to='/works'>
					<Gallery />
					<GalleryMobile />
				</Link>

				<div className='mobile__home'>
					<HeaderHome />
					<About />
				</div>
			</div>
		</>
	);
}
