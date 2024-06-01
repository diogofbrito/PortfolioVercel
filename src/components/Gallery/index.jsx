import React, { useState, useContext } from 'react';
import Masonry from 'react-masonry-css';
import { AppContext } from '../../contexts/AppContext';
import './style.css';

export function Gallery() {
	const { intro } = useContext(AppContext);

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		600: 1,
	};

	return (
		<div className='gallery'>
			<Masonry breakpointCols={breakpointColumnsObj} className='image-grid' columnClassName='image-grid_column'>
				{intro.map(item => (
					<>
						<div key={item.id} className='image-container'>
							{item.videoUrl ? (
								<video autoPlay muted loop playsInline preload='metadata'>
									<source src={item.videoUrl} type='video/mp4' />
								</video>
							) : (
								<img src={item.imageUrl} alt={item.title} loading='lazy' />
							)}
						</div>
						<div className='title__intro'>
							<div className='name__proj'>{item.title}</div>
							<div className='name__type'>{Array.isArray(item.category) ? item.category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{item.category}</div>}</div>
						</div>
					</>
				))}
			</Masonry>
		</div>
	);
}
