import React from 'react';
import LazyLoad from 'react-lazyload';

export function WorkItem({ project }) {
	const { id, title, imageUrl, videoUrl, category } = project;

	return (
		<>
			<div key={id} className='image-container'>
				{videoUrl ? (
					<div className='vimeo-wrapper'>
						<LazyLoad height={200} offset={100} once>
							<iframe src={`${videoUrl}?autoplay=1&loop=1&muted=1&background=1&playsinline=1&controls=0&title=0&byline=0&portrait=0`} allow='autoplay; fullscreen; picture-in-picture'></iframe>
						</LazyLoad>
					</div>
				) : (
					<img src={imageUrl} alt={title} loading='lazy' />
				)}
			</div>
			<div className='title__intro'>
				<div className='name__proj'>{title}</div>
				<div className='name__type'>{Array.isArray(category) ? category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{category}</div>}</div>
			</div>
		</>
	);
}
