import React from 'react';
import LazyLoad from 'react-lazyload';

export function WorkItem({ project }) {
	const { id, title, placeholder, category } = project;

	return (
		<div className='pb-3'>
			<div key={id} className='relative mb-[10px] overflow-hidden rounded-custom shadow-custom transition-all duration-300 ease-custom'>
				<LazyLoad>
					<img src={placeholder} alt={title} loading='lazy' />
				</LazyLoad>
			</div>
			<div className='flex flex-row items-center justify-between max-md:flex-col max-md:items-baseline max-md:gap-1 '>
				<p>{title}</p>
				<div className='flex items-center gap-2'>
					{Array.isArray(category) ? (
						category.map((cat, index) => (
							<div key={index} className='text-[0.7rem] leading-none flex pt-7px pr-8px pb-3px pl-8px rounded-34px darkBorder'>
								{cat}
							</div>
						))
					) : (
						<div className='text-[0.7rem] leading-none flex pt-7px pr-8px pb-3px pl-8px rounded-34px darkBorder'>{category}</div>
					)}
				</div>
			</div>
		</div>
	);
}
