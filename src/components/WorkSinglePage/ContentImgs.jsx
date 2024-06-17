import React from 'react';

export function ContentImgs({ restMedia, lastMedia }) {


	return (
		<>
			<div className='imgs__grid'>
				{restMedia.map((media, index) => (
					<div key={index} className='media-item'>
						{media.endsWith('.mp4') ? <video autoPlay loop playsInline muted src={media}></video> : <img src={media} alt={`Image ${index}`} />}
					</div>
				))}
			</div>
			<div className='imgs__grid-last'>
				{lastMedia && <div className='media-item'>{lastMedia.endsWith('.mp4') ? <video autoPlay loop playsInline muted src={lastMedia}></video> : <img src={lastMedia} alt='Last Media' />}</div>}
			</div>
		</>
	);
}
