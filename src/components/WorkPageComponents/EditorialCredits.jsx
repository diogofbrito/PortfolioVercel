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
