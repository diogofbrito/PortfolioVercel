import React, { useContext } from 'react';
import { WorkItem } from '../components/WorkItem.jsx';
import { Link } from 'react-router-dom';
import { FilterContext } from '../contexts/FilterContext.jsx';
import Masonry from 'react-masonry-css';

export function Works() {
	const { filteredProjects } = useContext(FilterContext);

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		600: 1,
	};

	return (
		<>
			<div className='projects container'>
				<Masonry breakpointCols={breakpointColumnsObj} className='image-grid' columnClassName='image-grid_column'>
					{filteredProjects.length > 0 ? (
						filteredProjects.map(project => (
							<Link to={`/works/${project.id}`} key={project.id}>
								<WorkItem project={project} />
							</Link>
						))
					) : (
						<div className='no-results-message'>No projects found</div>
					)}
				</Masonry>
			</div>
		</>
	);
}
