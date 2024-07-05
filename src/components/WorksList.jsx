import React from 'react';
import { Link } from 'react-router-dom';

export function WorksList({ projects }) {
	return (
		<div className='w-full flex flex-col justify-center items-center gap-3'>
			{projects.length > 0 ? (
				projects.map(project => (
					<Link to={`/works/${project.id}`} key={project.id} className='flex justify-between w-full p-4 bg-[#c5c5c5]/50 rounded-custom hover:bg-[#c5c5c5]/80'>
						<div>
							<p className='font-bold'>{project.title}</p>
							<div className='flex flex-row items-center justify-between pt-1 '>
								<div className='flex items-center gap-2 max-md:gap-1 '>
									{Array.isArray(project.category) ? (
										project.category.map((cat, index) => (
											<div key={index} className='text-[0.7rem] leading-none flex pt-7px pr-8px pb-3px pl-8px rounded-34px darkBorder'>
												{cat}
											</div>
										))
									) : (
										<div className='text-[0.7rem] leading-none flex pt-7px pr-8px pb-4px pl-8px rounded-34px darkBorder'>{project.category}</div>
									)}
								</div>
							</div>
						</div>
						<p>{project.year}</p>
					</Link>
				))
			) : (
				<div className='no-results-message'>No projects found</div>
			)}
		</div>
	);
}
