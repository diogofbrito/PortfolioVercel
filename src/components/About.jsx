import React from 'react';

export function About() {
	return (
		<>
			<div className='flex flex-col gap-3 text-base leading-5 pt-3 bg'>
				<div className='bg-[#c5c5c5]/50 rounded-custom p-6 max-md:p-5'>
					<div className='text-2xl'>About</div>
					Diogo Brito is a Portuguese Graphic Designer, Web Developer and Visual Artist.
					<br></br> He collaborates with diverse clients and projects across fashion, graphic design, editorial, videography, visual arts and choreography. He is also a co-founder of Stand Project, a collective art initiative in Lisbon, founded in 2020.
				</div>
				<div className='bg-[#c5c5c5]/50 rounded-custom p-6 max-md:p-5'>
					<div className='text-2xl'>Selected partners / Clients</div>
					Dino Alves<br></br>Underdogs Gallery<br></br>Wasted Rita<br></br>David Marques<br></br> Teresa Silva<br></br>Novocine<br></br>Jonas & Lander<br></br>Plataforma 285
				</div>
				<div className='bg-[#c5c5c5]/50 rounded-custom p-6 max-md:p-5'>
					<div className='text-2xl'>Contacts</div>
					<a href='mailto:diogobrito74@gmail.com'>E-mail</a>
					<br></br>
					<a href='https://www.instagram.com/diogofcbrito/' target='_blank'>
						Instagram
					</a>
					<br></br>
					<a href='https://www.linkedin.com/in/diogofcbrito/' target='_blank'>
						Linkedin
					</a>
					<br></br>
					<a href='https://github.com/diogofbrito/' target='_blank'>
						Github
					</a>
					<br></br>
					<a href='https://drive.google.com/file/d/1DTWFEIm2G74Rl5byl4UD59I19pTH-FPx/view?usp=sharing' target='_blank'>
						CV - Resume
					</a>
				</div>
			</div>
		</>
	);
}
