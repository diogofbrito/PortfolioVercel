import React from 'react';

export function EditorialCredits({ project }) {
	const { editorial } = project;

	if (!editorial) {
		return null;
	}

	const photographyCredit = editorial.find(item => item.photography);
	const links = editorial.find(item => item.links)?.links || [];
	const info = editorial.find(item => item.info)?.info || [];

	return (
		<div className='text grid'>
			<div>
				Credits<br></br>
			</div>
			<div>
				{info.length > 0 && (
					<div>
						{info.map((info, index) => (
							<div key={index}>
								<div style={{ paddingBottom: '1rem' }}>
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
				{photographyCredit && (
					<>
						<p>Photos</p> {photographyCredit.photography}
					</>
				)}
			</div>
		</div>
	);
}
