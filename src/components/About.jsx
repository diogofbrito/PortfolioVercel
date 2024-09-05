import React from 'react';

export function About() {
	return (
		<>
			<div className='flex flex-col gap-1 text-base leading-5 pt-1'>
				<div className='bg-[#c5c5c5]/50 rounded-3xl p-6 max-md:p-5'>
					<div className='text-xl'>About</div>
					I'm a multidisciplinary Designer, Web Developer, and Visual Artist.
					<br></br>I collaborate with diverse clients and projects across fashion, graphic design, editorial, videography, visual and performing arts. I'm also a co-founder of Stand Project, a
					collective art initiative in Lisbon, founded in 2020.
				</div>
				<div className='bg-[#c5c5c5]/50 rounded-3xl p-6 max-md:p-5'>
					<div className='text-xl'>Services</div>
					Web Design <br></br>Web Development<br></br>Visual Identity<br></br>Editorial Design<br></br>Art Direction <br></br>Posters <br></br>Video
				</div>
				<div className='bg-[#c5c5c5]/50 rounded-3xl p-6 max-md:p-5'>
					<div className='text-xl'>Selected partners / Clients</div>
					Dino Alves<br></br>Underdogs Gallery<br></br>Wasted Rita<br></br>David Marques<br></br> Teresa Silva<br></br>Novocine<br></br>Jonas & Lander<br></br>Plataforma 285
				</div>
				<div className='bg-[#c5c5c5]/50 rounded-3xl p-6 max-md:p-5'>
					<div className='text-xl'>Contacts</div>
					<a href='mailto:diogobrito74@gmail.com'>E-mail</a>
					<br></br>
					<a href='https://www.instagram.com/diogofcbrito/' target='_blank'>
						Instagram
					</a>
					<br></br>
					<a href='https://www.linkedin.com/in/diogofcbrito/' target='_blank'>
						Linkedin
					</a>
					
					
				</div>
				<div className='text-sm text-center pt-1 opacity-50'>® 2024 Diogo Brito</div>
			</div>
		</>
	);
}
