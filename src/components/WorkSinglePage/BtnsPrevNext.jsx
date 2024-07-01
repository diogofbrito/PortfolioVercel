import React from 'react';
import { Link } from 'react-router-dom';

export function BtnsPrevNext({ currentProjectId, projects }) {
	const currentIndex = projects.findIndex(project => project.id.toString() === currentProjectId);

	const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
    
    const scrollToTop = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		};

	return (
		<div className='btns-prev-next'>
			{prevProject && (
				<div className='navlink'>
					<Link to={`/works/${prevProject.id}`} onClick={scrollToTop}>
						Previous Project
					</Link>
				</div>
			)}
			{nextProject && (
				<div className='navlink'>
					<Link to={`/works/${nextProject.id}`} onClick={scrollToTop}>
						Next Project
					</Link>
				</div>
			)}
		</div>
	);
}
