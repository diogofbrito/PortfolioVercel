import React from 'react';

export function ContentImgs({ restMedia, lastMedia }) {


	return (
		<>
			<div className='grid grid-cols-2 gap-1 pt-1 max-md:grid-cols-1'>
				{restMedia.map((media, index) => (
					<div key={index} className='w-full h-full object-cover overflow-hidden rounded-3xl'>
						{media.endsWith('.mp4') ? (
							<video autoPlay loop playsInline muted src={media} className='w-full h-full object-cover'></video>
						) : (
							<img src={media} alt={`Image ${index}`} loading='lazy' className='w-full h-full object-cover' />
						)}
					</div>
				))}
			</div>
			<div className='pt-1 pb-1'>
				{lastMedia && (
					<div className='w-full h-full object-cover overflow-hidden rounded-3xl'>
						{lastMedia.endsWith('.mp4') ? (
							<video autoPlay loop playsInline muted src={lastMedia} ></video>
						) : (
							<img src={lastMedia} alt='Last Media' loading='lazy' className='w-full h-full object-cover' />
						)}
					</div>
				)}
			</div>
		</>
	);
}
