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
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[EffectFade, Autoplay, Pagination]}
				className='mySwiper'
			>
				{projects.map((project, index) => (
					<SwiperSlide key={`project_${index}`}>
						{project.videoUrl ? (
							<LazyLoad height={200} offset={100} once>
								<iframe
									src={`${project.videoUrl}?autoplay=1&loop=1&muted=1&background=1&playsinline=1&controls=0&title=0&byline=0&portrait=0`}
									allow='autoplay; fullscreen; picture-in-picture'
									frameBorder={0}
								></iframe>
							</LazyLoad>
						) : (
							<img src={project.imageUrl} alt={project.title} loading='lazy' />
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
