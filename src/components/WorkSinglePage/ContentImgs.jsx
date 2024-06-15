import React from 'react';

export function ContentImgs({ project }) {
	if (!project || !project.images || !Array.isArray(project.images)) {
		return null; // Ou outra lógica apropriada para quando não há imagens
	}
	const { images } = project;

	return (
		<div className='content-images'>
			<div className='image-grid'>
				{images.map((image, index) => (
					<div key={index} className='image-item'>
						<img src={image}  loading='lazy' />
					</div>
				))}
			</div>
		</div>
	);
}
