import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import LazyLoad from 'react-lazyload';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Gallery() {
	const { projects } = useContext(AppContext);

	return (
		<div className='max-md:hidden '>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[EffectFade, Autoplay, Pagination]}
			>
				{projects.map((project, index) => (
					<SwiperSlide key={`project_${index}`}>
						<LazyLoad>
							{project.videoUrl ? (
								<video
									src={project.videoUrl}
									autoPlay
									loop
									muted
									playsInline
									onError={e => {
										console.error(`Error loading video: ${project.videoUrl}`, e);
									}}
								></video>
							) : (
								<img src={project.imageUrl} alt={project.title} loading='lazy' />
							)}
						</LazyLoad>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
