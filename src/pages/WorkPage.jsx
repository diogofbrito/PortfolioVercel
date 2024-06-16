import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

export function WorkPage() {
	const { id } = useParams();
	const { projects } = useContext(AppContext);

	const project = projects.find(p => p.id.toString() === id);

	if (!project) {
		return <div>Projeto não encontrado</div>;
	}

	return (
		<div className='work-details'>
			{/* Renderizar vídeo se existir */}
			{project.videoUrl && (
				<video
					src={project.videoUrl}
					controls
					autoPlay
					loop
					playsInline
					muted
					onError={e => {
						console.error(`Error loading video: ${project.videoUrl}`, e);
					}}
				></video>
			)}

			{/* Renderizar imagens se existirem */}
			{project.images && project.images.map((image, index) => <img key={index} src={image} alt={`Image ${index}`} />)}

			{/* Renderizar detalhes do projeto */}
			<h2>{project.title}</h2>
			<p>ID: {project.id}</p>
			<p>Year: {project.year}</p>
			<p>Category: {Array.isArray(project.category) ? project.category.join(', ') : project.category}</p>

			<p>Outras informações e conteúdos do projeto aqui...</p>
		</div>
	);
}
