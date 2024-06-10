import React, { createContext, useEffect, useReducer } from 'react';
import { getProjWithCache } from '../services/api'; 
import { reducer } from '../reducer';

export const AppContext = createContext();

const initialState = {
	projects: [],
};

export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchProj() {
			try {
				const projeto = await getProjWithCache();
				dispatch({ type: 'SET_PROJECTS', payload: projeto.projects });
			} catch (error) {
				console.log('ERRO', error);
			}
		}

		fetchProj();
	}, []);

	

	return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
}
