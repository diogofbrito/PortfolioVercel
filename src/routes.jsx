import { createHashRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home/index';
import { About } from './pages/About/index';
import { Works } from './pages/Works/index';
import { ErrorPage } from './pages/ErrorPage/index';
import { Index } from './pages/Works/Index/index';

export const router = createHashRouter([
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
