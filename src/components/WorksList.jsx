import React from 'react';
import { Link } from 'react-router-dom';

export function WorksList({ projects }) {
	return (
		<div className='works__list'>
			{projects.length > 0 ? (
				projects.map(project => (
					<Link to={`/works/${project.id}`} key={project.id} className='work__list-item'>
						<div className='list__left'>
							<p style={{ fontWeight: 'bold' }}>{project.title}</p>
							<div className='title__intro' style={{ paddingTop: '0.4rem' }}>
								<div className='name__type'>{Array.isArray(project.category) ? project.category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{project.category}</div>}</div>
							</div>
						</div>
						<p>{project.year}</p>
					</Link>
				))
			) : (
				<div className='no-results-message'>No projects found</div>
			)}
		</div>
	);
}
