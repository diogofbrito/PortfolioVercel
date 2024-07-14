import React from 'react';
import LazyLoad from 'react-lazyload';

export function WorkItem({ project }) {
	const { id, title, placeholder, category } = project;

	return (
		<div className='relative pb-1'>
			<div key={id} className='group relative mb-[1px] overflow-hidden rounded-3xl shadow-custom transition-all duration-300 ease-custom'>
				<LazyLoad>
					<img src={placeholder} alt={title} loading='lazy' className='w-full h-full object-cover' />
				</LazyLoad>
				<div className='absolute inset-0 hidden md:flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-custom'>
					<p className='text-white text-xl max-md:text-base'>{title}</p>
					<div className='flex items-center gap-1'>
						{Array.isArray(category) ? (
							category.map((cat, index) => (
								<div key={index} className='text-[0.7rem] leading-none flex pt-1.5 pr-2 pb-1 pl-2  text-white rounded-34px border border-solid border-white bg-opacity-75'>
									{cat}
								</div>
							))
						) : (
							<div className='text-[0.7rem] leading-none flex pt-1.5 pr-2 pb-1 pl-2 rounded-34px border border-solid text-white border-white bg-opacity-75'>{category}</div>
						)}
					</div>
				</div>
			</div>

			<div className='md:hidden flex flex-row items-center justify-between m-1 '>
				<p className='text-xl'>{title}</p>
				<div className='flex items-center gap-1'>
					{Array.isArray(category) ? (
						category.map((cat, index) => (
							<div key={index} className='text-[0.7rem] leading-none flex pt-1.5 pr-2 pb-1 pl-2 rounded-34px darkBorder'>
								{cat}
							</div>
						))
					) : (
						<div className='text-[0.7rem] leading-none flex pt-1.5 pr-2 pb-1 pl-2 rounded-34px darkBorder'>{category}</div>
					)}
				</div>
			</div>
		</div>
	);
}