import React from 'react';
import { useNavigate } from 'react-router-dom';

export function BtnsPrevNext({ currentProjectId, projects }) {
	const navigate = useNavigate();

	const projectIndex = projects.findIndex(p => p.id.toString() === currentProjectId);
	const previousProjectId = projectIndex > 0 ? projects[projectIndex - 1].id : null;
	const nextProjectId = projectIndex < projects.length - 1 ? projects[projectIndex + 1].id : null;

	const handleNavigation = projectId => {
		navigate(`/works/${projectId}`);
	};

	return (
		<div className='btns-prev-next'>
			<button onClick={() => handleNavigation(previousProjectId)} disabled={!previousProjectId} className='navlink'>
				Previous Project
			</button>
			<button onClick={() => handleNavigation(nextProjectId)} disabled={!nextProjectId} className='navlink'>
				Next Project
			</button>
		</div>
	);
}
