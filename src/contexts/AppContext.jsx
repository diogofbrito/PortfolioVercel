import React, { createContext, useEffect, useReducer } from 'react';
import { getProj, getAbout, getIntro } from '../services/api';
import { reducer } from '../reducer';

export const AppContext = createContext();

const initialState = {
	projects: [],
	about: {},
	intro: [],
};

export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchIntro() {
			try {
				const intro = await getIntro();
				/*  console.log('INTRO::', intro);  */
				dispatch({ type: 'SET_INTRO', payload: intro.intro });
			} catch (error) {
				console.log('ERRO', error);
			}
		}

		fetchIntro();
	}, []);

	async function fetchAbout() {
		try {
			const about = await getAbout();
			/* console.log('ABOUT::', about); */
			dispatch({ type: 'SET_ABOUT', payload: about.about });
		} catch (error) {
			console.log('ERRO', error);
		}
	}

	async function fetchProj() {
		try {
			const projeto = await getProj();
			/* console.log('PROJETOS::', projeto); */
			dispatch({ type: 'SET_PROJECTS', payload: projeto.projects });
		} catch (error) {
			console.log('ERRO', error);
		}
	}

	

	return <AppContext.Provider value={{ ...state, fetchProj, fetchAbout }}>{children}</AppContext.Provider>;
}
