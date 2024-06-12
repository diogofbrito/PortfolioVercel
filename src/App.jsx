import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { AppProvider } from './contexts/AppContext';
import './index.css';
import './assets/font/stylesheet.css';
import { FilterProvider } from './contexts/FilterContext';

function App() {

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://player.vimeo.com/api/player.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);


	return (
		<AppProvider>
			<FilterProvider>
				<Header />
				<Outlet />
			</FilterProvider>
		</AppProvider>
	);
}

export default App;
