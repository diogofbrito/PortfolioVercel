import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { AppProvider } from './contexts/AppContext';
import { ViewProvider } from './contexts/ViewContext';

import { FilterProvider } from './contexts/FilterContext';

function App() {
	return (
		
			<AppProvider>
				<FilterProvider>
					<ViewProvider>
						<Header />
						<Outlet />
					</ViewProvider>
				</FilterProvider>
			</AppProvider>
	
	);
}

export default App;
