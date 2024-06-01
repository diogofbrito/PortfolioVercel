import React, { useContext } from 'react';
import './style.css';
import { AppContext } from '../../../contexts/AppContext';

export function Index() {
	const { projects } = useContext(AppContext);

	return (
		<div className='index'>
			<div className='container'>
				<div className='index__grid'>
					{projects.map(project => (
						<div className='list__item' key={project.id}>
							<div className='list__year'>{project.year}</div>
							<div className='list__title'>{project.title}</div>
							<div className='list__category'>{Array.isArray(project.category) ? project.category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{project.category}</div>}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
