import React, { useContext } from 'react';
import { WorkItem } from '../components/WorkItem.jsx';
import { WorksList } from '../components/WorksList.jsx';
import { Link } from 'react-router-dom';
import { FilterContext } from '../contexts/FilterContext.jsx';
import { ViewContext } from '../contexts/ViewContext.jsx';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet-async';


export function Works() {
	const { filteredProjects } = useContext(FilterContext);
	const { isListView } = useContext(ViewContext);


	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		768: 1,
	};

	return (
		<>
			<Helmet>
				<title>Diogo Brito | Projects </title>
				<meta name='description' content='Selected Projects between 2019 to current' />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content='graphic design, web development, exhibitions, editorial design, art direction, visual identity' />
			</Helmet>
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
		</>
	);
}
