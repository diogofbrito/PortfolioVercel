import React, { useContext, useState, useEffect } from 'react';
import Slider from 'react-slick';
import './style.css';
import { AppContext } from '../../contexts/AppContext';


export function Gallery() {
	const { projects } = useContext(AppContext);
	

	const settings = {
		dots: false,
		fade: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
		autoplay: true,
		autoplaySpeed: 7000,
	};

	return (
		<div className='slider-container' >
			<Slider {...settings}>
				{projects.map(project => (
					<div key={project.id} className='slider-item'>
						{project.videoUrl ? (
							<video autoPlay muted loop playsInline>
								<source src={project.videoUrl} type='video/mp4' />
							</video>
						) : (
							<img src={project.imageUrl} alt={project.title} loading='lazy' />
						)}
					</div>
				))}
			</Slider>
		</div>
	);
}
