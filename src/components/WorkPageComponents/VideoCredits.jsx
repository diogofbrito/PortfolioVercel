import React from 'react';

export function VideoCredits({ project }) {
	const { video } = project;

	if (!video) {
		return null;
	}

	const photographyCredit = video.find(item => item.photography);
	const links = video.find(item => item.links)?.links || [];
	const infoItems = video.find(item => item.info)?.info || [];

	return (
		<div className='text grid'>
			<div>
				Credits<br></br>
			</div>
			<div>
				{photographyCredit && (
					<>
						<p>Photos</p> {photographyCredit.photography}
					</>
				)}

				{infoItems.map((info, index) => (
					<div key={index}>
						<div style={{ paddingTop: '1rem' }}>
							<p>{info.title}</p> {info.content}
						</div>
					</div>
				))}

				{links.length > 0 && (
					<div style={{ paddingTop: '1rem' }}>
						<p>Links</p>
						{links.map((link, index) => (
							<div key={index}>
								<a href={link.link} target='_blank'>
									<u>{link.title}</u>
								</a>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}