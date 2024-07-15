import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import LazyLoad from 'react-lazyload';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function GalleryMobile() {
	const { projects } = useContext(AppContext);

	const videoEl = useRef(null);

	const attemptPlay = () => {
		videoEl &&
			videoEl.current &&
			videoEl.current.play().catch(error => {
				console.error('Error attempting to play', error);
			});
	};

	useEffect(() => {
		attemptPlay();
	}, []);

	return (
		<div className='hidden max-md:block'>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[EffectFade, Autoplay, Pagination]}
			>
				{projects.map((project, index) => (
					<SwiperSlide key={`project_${index}`}>
						<LazyLoad>
							{project.videoMobile ? (
								<video
									src={project.videoMobile}
									loop
									muted
									ref={videoEl}
									playsInline
									onError={e => {
										console.error(`Error loading video: ${project.videoMobile}`, e);
									}}
								></video>
							) : (
								<img src={project.imageMobile} alt={project.title} loading='lazy' />
							)}
						</LazyLoad>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
