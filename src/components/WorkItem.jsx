import React from 'react';
import LazyLoad from 'react-lazyload';

export function WorkItem({ project }) {
	const { id, title, imageUrl, videoUrl, category } = project;

	return (
		<div style={{ paddingBottom: '1rem' }}>
			
			<div key={id} className='image-container'>
				<LazyLoad>
					{videoUrl ? (
						<video
							src={videoUrl}
							autoPlay
							loop
							playsInline
							muted
							onError={e => {
								console.error(`Error loading video: ${videoUrl}`, e);
							}}
						></video>
					) : (
						<img src={imageUrl} alt={title} loading='lazy' />
					)}
				</LazyLoad>
			</div>
			<div className='title__intro'>
				<p style={{ fontWeight: 'bold' }}>{title}</p>
				<div className='name__type'>{Array.isArray(category) ? category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{category}</div>}</div>
			</div>
		</div>
	);
}
