import { useEffect } from 'react';

export function ErrorPage() {

 	useEffect(() => {
		const timer = setTimeout(() => {
			window.location.href = '/';
		}, 5000);

		return () => clearTimeout(timer);
	}, []); 

	return (
		<div >
			<h2 className='w-full h-screen flex justify-center items-center text-xl'>
				You seem lost!<br></br>
				Don't worry, I'll take you to the homepage in 5 seconds...
			</h2>
		</div>
	);
}
