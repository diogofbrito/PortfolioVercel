import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/index';
import { AppProvider } from './contexts/AppContext';
import './index.css';
import './assets/font/stylesheet.css';
import { FilterProvider } from './contexts/FilterContext';

function App() {
	return (
		<main style={{ Height: '100vh',  }}>
			<AppProvider>
				<FilterProvider>
					<Header />
					<Outlet />
				</FilterProvider>
			</AppProvider>
		</main>
	);
}

export default App;
