import React, { useContext, useState, useEffect } from 'react';
import { ProjectItem } from '../../../components/ProjectItem/index.jsx';
import { FilterBar } from '../../../components/FilterBar/index.jsx';
import { FilterContext } from '../../../contexts/FilterContext.jsx';
import Masonry from 'react-masonry-css';
import './style.css';

export function List() {
	const { searchTerm, setSearchTerm, selectedYear, setSelectedYear, filteredProjects, uniqueYears } = useContext(FilterContext);

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		600: 1,
	};

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 0); 
		return () => clearTimeout(timer); 
	}, []);

	return (
		<div className='projects container'>
			<FilterBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} uniqueYears={uniqueYears} selectedYear={selectedYear} setSelectedYear={setSelectedYear} filteredProjects={filteredProjects} />

			{isLoading ? (
				<div className='loading-message'>Loading...</div> 
			) : (
				<Masonry breakpointCols={breakpointColumnsObj} className='image-grid' columnClassName='image-grid_column'>
					{filteredProjects.length > 0 ? (
						filteredProjects.map(project => <ProjectItem key={project.id} project={project} />)
					) : (
						<div className='no-results-message'>No results found.</div> 
					)}
				</Masonry>
			)}
		</div>
	);
}
