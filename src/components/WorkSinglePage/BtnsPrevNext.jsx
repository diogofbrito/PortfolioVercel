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
		<div className='flex justify-center gap-3 '>
			<button
				onClick={() => handleNavigation(previousProjectId)}
				disabled={!previousProjectId}
				className='bg-[#c5c5c5]/50 rounded-custom py-2.6 px-4 flex items-center disabled:opacity-50 disabled:pointer-events-none'
			>
				Previous Project
			</button>
			<button
				onClick={() => handleNavigation(nextProjectId)}
				disabled={!nextProjectId}
				className='bg-[#c5c5c5]/50 rounded-custom py-2.6 px-4 flex items-center disabled:opacity-50 disabled:pointer-events-none'
			>
				Next Project
			</button>
		</div>
	);
}
