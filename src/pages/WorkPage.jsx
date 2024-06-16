import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

export function WorkPage() {
	const { projectId } = useParams();
	const { projects } = useContext(AppContext);

	const project = projects.find(p => p.id === parseInt(projectId));

	if (!project) {
		return <div>Projeto não encontrado</div>;
	}

	const { title, videoUrl, imageUrl, images, category, year, info } = project;

	const handleError = e => {
		console.error('Erro ao carregar o vídeo:', e);
		console.error('Detalhes do evento de erro:', e.nativeEvent);
		console.error('URL do vídeo:', videoUrl);
	};

	return (
		<div className='container'>
			<div className='work__container'>
				{videoUrl ? <video src={videoUrl} autoPlay loop muted playsInline onError={handleError}></video> : imageUrl && <img src={imageUrl} alt={title} loading='lazy' />}
			</div>
			<h1>{title}</h1>
			<div>Category: {Array.isArray(category) ? category.join(', ') : category}</div>
			<div>Year: {year}</div>
			<p>{info}</p>
		</div>
	);
}
