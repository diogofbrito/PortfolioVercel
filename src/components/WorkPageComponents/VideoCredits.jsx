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
		<div className='bg-[#c5c5c5]/50 rounded-3xl p-6 text-base leading-5 grid grid-cols-2 max-md:grid-cols-1'>
			<div>
				<p className='font-bold'>Credits</p>
			</div>
			<div>
				{photographyCredit && (
					<>
						<p>Photos</p> {photographyCredit.photography}
					</>
				)}

				{infoItems.map((info, index) => (
					<div key={index}>
						<div className='pt-4'>
							<p>{info.title}</p> {info.content}
						</div>
					</div>
				))}

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
