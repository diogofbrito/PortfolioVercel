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
		<div className='bg-[#c5c5c5]/50 rounded-custom p-6 text-base leading-5 grid grid-cols-2 max-md:p-4 max-md:grid-cols-1'>
			<p className='font-bold'>
				Credits
			</p>
			<div >
				{photography && (
					<div>
						<p>Photos</p> {photography.photography}
					</div>
				)}

				{info.length > 0 && (
					<div>
						{info.map((info, index) => (
							<div key={index}>
								<div className='pt-4'>
									<p>{info.title}</p> {info.content}
								</div>
							</div>
						))}
					</div>
				)}
				{links.length > 0 && (
					<div className='pt-4'>
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
