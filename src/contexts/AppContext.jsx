import React, { createContext, useEffect, useState } from 'react';
import { getProjects} from '../services/api';

export const AppContext = createContext();

const initialState = {
	projects: [],
};

export function AppProvider({ children }) {
	const [projects, setProjects] = useState(initialState.projects);

	useEffect(() => {
		async function fetchProjects() {
			try {
				const projects = await getProjects();
				setProjects(projects.projects);
			} catch (error) {
				console.log('ERRO', error);
			}
		}

		fetchProjects();
	}, []);

	return <AppContext.Provider value={{ projects }}>{children}</AppContext.Provider>;
}
