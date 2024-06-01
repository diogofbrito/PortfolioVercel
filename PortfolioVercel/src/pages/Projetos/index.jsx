import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router';
import { AppContext } from '../../contexts/AppContext';

export function Projects() {
	const { fetchProj } = useContext(AppContext);

	useEffect(() => {
		fetchProj();
	}, []);

	return <Outlet />;
}
