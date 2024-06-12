import React, { useContext } from 'react';
import { ProjectItem } from '../../components/ProjectItem/index.jsx';
import { FilterBar } from '../../components/HeaderPage/FilterBar.jsx';
import { FilterContext } from '../../contexts/FilterContext.jsx';
import Masonry from 'react-masonry-css';
import './style.css';

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
					{filteredProjects.length > 0 ? filteredProjects.map(project => <ProjectItem key={project.id} project={project} />) : <div className='no-results-message'>No results found.</div>}
				</Masonry>
			</div>
		</>
	);
}
