import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { HeaderHome } from '../components/Header/HeaderHome';
import { GalleryMobile } from '../components/GalleryMobile';
import { Helmet } from 'react-helmet-async';

export function Home() {
	return (
		<>
			<Helmet>
				<title>Diogo Brito </title>
				<meta name='description' content='I am a multidisciplinary Designer, Web Developer, and Visual Artist.' />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content='diogo brito, diogo brito design, design, diogo filipe brito, brito, graphic design, web development, exhibitions, editorial design, art direction, visual identity' />
			</Helmet>
			<div className='margin-general grid grid-4 gap-1 max-md:flex max-md:flex-col '>
				<div className='grid-area-1'>
					<Link to='/works'>
						<Gallery />
						<GalleryMobile />
					</Link>
				</div>
				<div className='grid-area-2 about md:overflow-scroll'>
					<HeaderHome />
					<About />
				</div>
			</div>
		</>
	);
}
