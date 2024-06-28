import React from 'react';

export function ExhibitionsCredits({ project }) {

	const { exhibitions } = project;

	if (!exhibitions) {
		return null;
	}

	const photographyCredit = exhibitions.find(item => item.photography);
	const links = exhibitions.find(item => item.links)?.links || [];
	const infoItems = exhibitions.find(item => item.info)?.info || [];


	return (
		<div className='text grid'>
			<div>
				Credits<br></br>
			</div>
			<div>
				{infoItems.map((info, index) => (
					<div key={index}>
						<div style={{ paddingBottom: '1rem' }}>
							<p>{info.title}</p> {info.content}
						</div>
					</div>
				))}

				{links.length > 0 && (
					<div>
						{links.map((link, index) => (
							<div key={index}>
								<strong>{link.title}:</strong>
								<a href={link.link} target='_blank'>
									{link.content}
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
