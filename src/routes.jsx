import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home/index';
import { About } from './pages/About/index.jsx';
import { Works } from './pages/Works/index.jsx';
import { ErrorPage } from './pages/ErrorPage/index.jsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/work',
				element: <Works />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
