import React, { createContext, useEffect, useReducer } from 'react';
import { getProj, getAbout, getIntro } from '../services/api';
import { reducer } from '../reducer';

export const AppContext = createContext();

const initialState = {
	projects: [],
	about: {},
};

export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchProj() {
			try {
				const projeto = await getProj();
				dispatch({ type: 'SET_PROJECTS', payload: projeto.projects });
			} catch (error) {
				console.log('ERRO', error);
			}
		}

		fetchProj();
	}, []);

	async function fetchAbout() {
		try {
			const about = await getAbout();
			dispatch({ type: 'SET_ABOUT', payload: about.about });
		} catch (error) {
			console.log('ERRO', error);
		}
	}

	return <AppContext.Provider value={{ ...state, fetchAbout }}>{children}</AppContext.Provider>;
}
