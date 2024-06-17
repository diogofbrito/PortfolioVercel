import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContentImgs } from '../components/WorkSinglePage/ContentImgs.jsx';
import { AppContext } from '../contexts/AppContext';

export function WorkPage() {
	const { id } = useParams();
	const { projects } = useContext(AppContext);

	const project = projects.find(p => p.id.toString() === id);

	if (!project) {
		return <div>Projeto não encontrado</div>;
	}

	const firstMedia = project.images.length > 0 ? project.images[0] : null;
	const lastMedia = project.images.length > 1 ? project.images[project.images.length - 1] : null;
	const restMedia = project.images.length > 2 ? project.images.slice(1, -1) : [];

	const formattedText = project.info.replace(/\n/g, '<br>');

	return (
		<div className='container'>
			<div className='wp__container'>
				{project.videoUrl && <video src={project.videoUrl} autoPlay playsInline loop muted></video>}
				{project.imageUrl && <img src={project.imageUrl} alt={project.title} />}
			</div>

			<div className='wp__second'>
				<div className='vid'>
					{firstMedia && firstMedia.endsWith('.mp4') ? (
						<video src={firstMedia} autoPlay playsInline loop muted className='wp__video'></video>
					) : (
						<div className='wp__image'>{firstMedia && <img src={firstMedia} alt={project.title} />}</div>
					)}
				</div>

				<div className='text'>
					<h2>{project.title}</h2>
					<p>{Array.isArray(project.category) ? project.category.join(', ') : project.category}</p>
					<br></br>
					<p dangerouslySetInnerHTML={{ __html: formattedText }}></p>
					<br />
					<p>{project.credits}</p>
					<p>{project.moreinfo}</p>
				</div>
			</div>

			<ContentImgs restMedia={restMedia} lastMedia={lastMedia} />
		</div>
	);
}
