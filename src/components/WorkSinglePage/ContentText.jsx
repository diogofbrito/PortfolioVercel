import React from 'react';

export function ContentText({ project }) {
	return (
		<div className='wp__text'>
			<div>
				<h2>{project.title}</h2>
                <p>{Array.isArray(project.category) ? project.category.join(', ') : project.category}</p>
                <br></br>
                <p>{project.info}</p>
			</div>
			<div>
				
				<p>Year: {project.year}</p>
			</div>
		</div>
	);
}
