import React, { useContext, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ContentImgs } from '../components/WorkSinglePage/ContentImgs.jsx';
import { ContentImgsMisterio } from '../components/WorkSinglePage/ContentImgsMisterio.jsx';
import { AppContext } from '../contexts/AppContext';
import { ExhibitionCredits } from '../components/WorkPageComponents/ExhibitionCredits.jsx';
import { BtnsPrevNext } from '../components/WorkSinglePage/BtnsPrevNext.jsx';
import { VideoCredits } from '../components/WorkPageComponents/VideoCredits.jsx';
import { EditorialCredits } from '../components/WorkPageComponents/EditorialCredits.jsx';
import { GraphicCredits } from '../components/WorkPageComponents/GraphicCredits.jsx';

export function WorkPage() {
	const { id } = useParams();
	const { projects } = useContext(AppContext);
	const wpSecondRef = useRef(null);

	const project = projects.find(p => p.id.toString() === id);

	useEffect(() => {
		if (wpSecondRef.current) {
			wpSecondRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [id]);

	if (!project) {
		return <div>Projeto não encontrado</div>;
	}

	const firstMedia = project.images.length > 0 ? project.images[0] : null;
	const lastMedia = project.images.length > 1 ? project.images[project.images.length - 1] : null;
	const restMedia = project.images.length > 2 ? project.images.slice(1, -1) : [];

	const formattedText = project.info.replace(/\n/g, '<br>');

	return (
		<div className='margin-general'>
			<div className='relative overflow-hidden rounded-3xl transition-all duration-300 ease'>
				{project.videoUrl && (
					<video src={project.videoUrl} autoPlay playsInline loop muted className='w-full h-full transform transition-transform duration-300 ease scale-104 object-cover max-md:scale-107'></video>
				)}
				{project.imageUrl && <img src={project.imageUrl} alt={project.title} loading='lazy' className='w-full h-full transform transition-transform duration-300 ease scale-104 object-cover ' />}
			</div>

			<div className='pt-1 grid grid-cols-2 gap-1 max-md:grid-cols-1' ref={wpSecondRef}>
				<div className='max-md:order-2'>
					{firstMedia && firstMedia.endsWith('.mp4') ? (
						<video src={firstMedia} autoPlay playsInline loop muted className='object-cover w-full h-full rounded-3xl'></video>
					) : (
						<div>{firstMedia && <img src={firstMedia} alt={project.title} loading='lazy' className='object-cover w-full h-full rounded-3xl' />}</div>
					)}
				</div>

				<div className='bg-[#c5c5c5]/50 rounded-3xl p-6 text-base leading-5'>
					<div className='flex flex-row justify-between'>
						<div>
							<h2 className='text-xl leading-none max-md:text-xl max-md:leading-none'>{project.title}</h2>
							<div className='flex items-center gap-1'>
								{Array.isArray(project.category) ? (
									project.category.map((cat, index) => (
										<div key={index} className='text-[0.7rem] leading-none flex pt-7px pr-8px pb-3px pl-8px rounded-34px darkBorder'>
											{cat}
										</div>
									))
								) : (
									<div className='text-[0.7rem] leading-none flex pt-7px pr-8px pb-3px pl-8px rounded-34px darkBorder'>{project.category}</div>
								)}
							</div>
						</div>
						<p className='font-bold'>{project.year}</p>
					</div>

					<div className='pt-8'>
						<p dangerouslySetInnerHTML={{ __html: formattedText }}></p>
						{project.infoLink && (
							<Link to={`/works/StandProject`}>
								<u>{project.infoLink} </u>
							</Link>
						)}
					</div>
				</div>
			</div>

			{id === 'MisterioDaCultura' ? <ContentImgsMisterio restMedia={restMedia} lastMedia={lastMedia} project={project} /> : <ContentImgs restMedia={restMedia} lastMedia={lastMedia} />}

			{project.exhibitions && (
				<div className='-pt-8 pb-1 max-md:-pt-4'>
					<ExhibitionCredits project={project} />
				</div>
			)}
			{project.editorial && (
				<div className='-pt-8 pb-1 max-md:-pt-4'>
					<EditorialCredits project={project} />
				</div>
			)}
			{project.video && (
				<div className='-pt-8 pb-1 max-md:-pt-4'>
					<VideoCredits project={project} />
				</div>
			)}
			{project.graphic && (
				<div className='-pt-8 pb-1 max-md:-pt-4'>
					<GraphicCredits project={project} />
				</div>
			)}

			<BtnsPrevNext currentProjectId={id} projects={projects} />
		</div>
	);
}
