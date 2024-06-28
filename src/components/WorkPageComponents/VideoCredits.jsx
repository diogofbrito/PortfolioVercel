import React from 'react';

export function VideoCredits({ video }) {
	if (!video) {
		return null; 
	}

	return (
		<div className='text grid'>
			<div></div>
			<div>
				{video.director && (
					<div className='video-item'>
						<h3>Director</h3>
						<p>{video.director}</p>
					</div>
				)}
				{video.editor && (
					<div className='video-item'>
						<h3>Editor</h3>
						<p>{video.editor}</p>
					</div>
				)}
				{video.cinematography && (
					<div className='video-item'>
						<h3>Cinematography</h3>
						<p>{video.cinematography}</p>
					</div>
				)}
				{video.links && video.links.length > 0 && (
					<div className='video-item'>
						<h3>Video Links</h3>
						<ul>
							{video.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<a href={link.link} target='_blank' rel='noopener noreferrer'>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
