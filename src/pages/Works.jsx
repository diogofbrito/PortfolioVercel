import React, { useContext } from 'react';
import { WorkItem } from '../components/WorkItem.jsx';
import { WorksList } from '../components/WorksList.jsx';
import { Link } from 'react-router-dom';
import { FilterContext } from '../contexts/FilterContext.jsx';
import { ViewContext } from '../contexts/ViewContext.jsx';
import Masonry from 'react-masonry-css';

export function Works() {
	const { filteredProjects } = useContext(FilterContext);
	const { isListView } = useContext(ViewContext);


	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		768: 1,
	};

	return (
		<div>
			<div className='flex flex-col margin-general '>
				{isListView ? (
					<WorksList projects={filteredProjects} />
				) : (
					<Masonry breakpointCols={breakpointColumnsObj} className='flex gap-1' columnClassName='bg-clip-padding'>
						{filteredProjects.length > 0 ? (
							filteredProjects.map(project => (
								<Link to={`/works/${project.id}`} key={project.id}>
									<WorkItem project={project} />
								</Link>
							))
						) : (
							<div className='p-2 '>No projects found</div>
						)}
					</Masonry>
				)}
			</div>
		</div>
	);
}
