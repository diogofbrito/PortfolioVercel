import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { AppProvider } from './contexts/AppContext';
import { ViewProvider } from './contexts/ViewContext';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { FilterProvider } from './contexts/FilterContext';

function App() {
	return (
		<AppProvider>
			<FilterProvider>
				<ViewProvider>
					<Analytics />
					<SpeedInsights />
					<Header />
					<Outlet />
				</ViewProvider>
			</FilterProvider>
		</AppProvider>
	);
}

export default App;
