import React from 'react';

export function ContentImgsMisterio({ restMedia, lastMedia }) {
	const firstRow = restMedia.slice(0, Math.max(restMedia.length - 4, 0));
	const lastRow = restMedia.slice(Math.max(restMedia.length - 3, 0));

	return (
		<>
			{/* Renderização da primeira linha */}
			<div className='grid grid-cols-2 gap-3 pt-3 max-md:grid-cols-1'>
				{firstRow.map((media, index) => (
					<div key={index} className='w-full h-full object-cover overflow-hidden rounded-custom'>
						{media.endsWith('.mp4') ? (
							<video autoPlay loop playsInline muted src={media} className='w-full h-full object-cover'></video>
						) : (
							<img src={media} alt={`Image ${index}`} loading='lazy' className='w-full h-full object-cover' />
						)}
					</div>
				))}
			</div>

			<div className='grid grid-cols-3 grid-rows-1 gap-3 pt-3 max-md:grid-cols-1'>
				{lastRow.map((media, index) => (
					<div key={index} className='w-full h-full object-cover overflow-hidden rounded-custom'>
						{media.endsWith('.mp4') ? <video autoPlay loop playsInline muted src={media}></video> : <img src={media} alt={`Image ${index}`} loading='lazy' className='w-full h-full object-cover' />}
					</div>
				))}
			</div>

			<div className='pt-3 pb-3'>
				{lastMedia && (
					<div className='w-full h-full object-cover overflow-hidden rounded-custom'>
						{lastMedia.endsWith('.mp4') ? (
							<video autoPlay loop playsInline muted src={lastMedia}></video>
						) : (
							<img src={lastMedia} alt='Last Media' loading='lazy' className='w-full h-full object-cover' />
						)}
					</div>
				)}
			</div>
		</>
	);
}