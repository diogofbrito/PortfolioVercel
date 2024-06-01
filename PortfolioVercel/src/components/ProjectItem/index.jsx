import React from 'react';
import './style.css';

export function ProjectItem({ project }) {
	const { id, title, imageUrl, videoUrl, category } = project;

	return (
		<>
			<div key={id} className='image-container'>
				{videoUrl ? (
					<video autoPlay muted loop playsInline preload='metadata'>
						<source src={videoUrl} type='video/mp4' />
					</video>
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
