import { useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import './style.css';

export function ErrorPage() {
	const location = useLocation();

	useEffect(() => {
		const timer = setTimeout(() => {
			window.location.href = '/portfolio/';
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='error'>
			<h2>
				You seem lost!<br></br>
				Don't worry, I'll take you to the homepage in 5 seconds...
			</h2>
		</div>
	);
}
