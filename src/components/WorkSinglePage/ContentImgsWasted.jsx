import React from 'react';

export function ContentImgsWasted({ restMedia, lastMedia, project }) {
	const firstRow = restMedia.slice(0, Math.max(restMedia.length - 4, 0));
	const lastRow = restMedia.slice(Math.max(restMedia.length - 3, 0));


	return (
		<>
			<div className='grid grid-cols-2 gap-1 pt-1 max-md:grid-cols-1'>
				{firstRow.map((media, index) => (
					<div key={index} className='w-full h-full object-cover overflow-hidden rounded-3xl'>
						{media.endsWith('.mp4') ? (
							<video autoPlay loop playsInline muted src={media} className='w-full h-full object-cover'></video>
						) : (
							<img src={media} alt={project.title} loading='lazy' className='w-full h-full object-cover' />
						)}
					</div>
				))}
			</div>

			<div className='grid grid-cols-2 gap-1 pt-1 max-md:grid-cols-1'>
				<div className='w-full h-full object-cover overflow-hidden rounded-3xl'>
					{lastRow[0]?.endsWith('.mp4') ? (
						<video autoPlay loop playsInline muted src={lastRow[0]}></video>
					) : (
						<img src={lastRow[0]} alt={project.title} loading='lazy' className='w-full h-full object-cover' />
					)}
				</div>

				<div className='flex flex-col gap-1'>
					<div className='w-full h-full object-cover overflow-hidden rounded-3xl'>
						{lastRow[1]?.endsWith('.mp4') ? (
							<video autoPlay loop playsInline muted src={lastRow[1]}></video>
						) : (
							<img src={lastRow[1]} alt={project.title} loading='lazy' className='w-full h-full object-cover' />
						)}
					</div>

					<div className='w-full  object-cover overflow-hidden rounded-3xl'>
						{lastRow[2]?.endsWith('.mp4') ? (
							<video autoPlay loop playsInline muted src={lastRow[2]}></video>
						) : (
							<img src={lastRow[2]} alt={project.title} loading='lazy' className='w-full h-full object-cover' />
						)}
					</div>
				</div>
			</div>

			<div className='pt-1 pb-1'>
				{lastMedia && (
					<div className='w-full h-full object-cover overflow-hidden rounded-3xl'>
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
