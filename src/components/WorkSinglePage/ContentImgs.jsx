import React from 'react';

export function ContentImgs({ mediaList }) {
	const gridClasses = ['imgs__grid', mediaList.length >= 7 ? 'grid-four' : mediaList.length >= 4 ? 'grid-three' : 'grid-two'].join(' ');


	return (
		<div className={gridClasses}>
			{mediaList.map((media, index) => (
				<div key={index} className='media-item'>
					{media.endsWith('.mp4') ? <video autoPlay loop playsInline muted src={media}></video> : <img src={media} alt={`Image ${index}`} />}
				</div>
			))}
		</div>
	);
}
