import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

export function ProjectPage() {
	const { projectId } = useParams();
	const { projects } = useContext(AppContext);

	const project = projects.find(p => p.id === parseInt(projectId));

	if (!project) {
		return <div>Projeto não encontrado</div>; 
	}

	return (
		<div className='container'>
			<div className='hero__project'>
				{project.videoUrl ? (
					<div className='vimeo-wrapper' style={{ borderRadius: '15px'}}>
						<iframe src={`${project.videoUrl}?autoplay=1&loop=1&muted=1&background=1&playsinline=1&controls=0&title=0&byline=0&portrait=0`} allow='autoplay; fullscreen; picture-in-picture'></iframe>
					</div>
				) : (
					<img src={project.imageUrl} alt={project.title} loading='lazy' />
				)}
            </div>
            
			<h1>{project.title}</h1> {project.category}
		</div>
	);
}
