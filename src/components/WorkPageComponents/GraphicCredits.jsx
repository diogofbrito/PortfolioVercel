import React from 'react';

export function GraphicCredits({ project }) {
	const { graphic } = project;

	if (!graphic) {
		return null;
	}

	const photography = graphic.find(item => item.photography);
	const links = graphic.find(item => item.links)?.links || [];
	const info = graphic.find(item => item.info)?.info || [];

	return (
		<div className='text grid'>
			<div>
				Credits<br></br>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				{photography && (
					<div>
						<p>Photos</p> {photography.photography}
					</div>
				)}

				{info.length > 0 && (
					<div>
						{info.map((info, index) => (
							<div key={index}>
								<div style={{ paddingTop: '1rem' }}>
									<p>{info.title}</p> {info.content}
								</div>
							</div>
						))}
					</div>
				)}
				{links.length > 0 && (
					<div>
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
