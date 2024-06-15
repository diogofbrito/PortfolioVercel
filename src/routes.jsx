import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home.jsx';
import { ProjectPage } from './components/WorkSinglePage/WorkPage.jsx';
import { Works } from './pages/Works.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';

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
				path: '/works',
				element: <Works />,
			},
			{
				path: '/works/:projectId',
				element: <ProjectPage />,
			},
			
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
