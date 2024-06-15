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

	const { title, videoUrl, imageUrl, images, category, year, info } = project;

	
	return (
		<div className='container'>
			<div className='work__container'>
				{videoUrl ? <video src={videoUrl} autoPlay loop muted></video> : imageUrl && <img src={imageUrl} alt={title} loading='lazy' />}
			</div>
			<h1>{title}</h1>
			<div>Category: {Array.isArray(category) ? category.join(', ') : category}</div>
			<div>Year: {year}</div>
			<p>{info}</p>
		</div>
	);
}
