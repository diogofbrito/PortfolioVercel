import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { HeaderHome } from '../components/Header/HeaderHome';
import { GalleryMobile } from '../components/GalleryMobile';

export function Home() {
	return (
		<>
			<div className='margin-general grid grid-4 gap-3 max-md:flex max-md:flex-col '>
				<div className='grid-area-1'>
					<Link to='/works'>
						<Gallery />
						<GalleryMobile />
					</Link>
				</div>
				<div className='grid-area-2 about overflow-scroll'>
					<HeaderHome />
					<About />
				</div>
			</div>
		</>
	);
}
