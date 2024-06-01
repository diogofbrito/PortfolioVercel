import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Footer } from '../../components/Footer';
import './style.css';
import { Link } from 'react-router-dom';

export function About() {
	const { about, fetchAbout } = useContext(AppContext);
	const { bio, education, skills, clients, exhibitions } = about;

	useEffect(() => {
		fetchAbout();
	}, []);

	return (
		<>
			<Footer />
			<div className='container'>
				<div className='about'>
					<div className='about__flex'>
						<div className='bio'>
							<div className='title'>About</div>
							<div>
								Portuguese Graphic Designer, Web Developer and Visual Artist.<br></br> He collaborates with diverse clients and projects across fashion, graphic design, editorial, videography, visual
								arts and choreography. He is also a co-founder member of Stand Project, a collective art initiative in Lisbon, founded in 2020.
								<br></br>
								<br></br>As a visual artist, his work encompasses video art and installation, with notable projects such as the solo exhibition “Amadora-3" at Gaivotas-6, Lisbon (2021), and
								appearances at prestigious events like the Temps d’Images Festival (2016), ARCOLisboa, Lisbon (2016), and FUSO - Festival Internacional de Vídeo Arte at MAAT, Lisbon (2015).<br></br>
								<br></br>
								He also works as a videographer for various projects, including "Teorias da Inspiração- Filme” (2021), “Dança sem Vergonha” (2020), and "Mistério da Cultura" (2019) by David Marques
								Additionally, as a web designer and developer, Brito has contributed to projects for Dino Alves (2024), Wasted Rita (2023), and Novocine (2022); and as a graphic designer on projects
								such as the Art Direction and Visual Identity for a collaboration between Stand Project and the National Coach Museum of Lisbon for Umbigo Magazine (2022), “Esa Cosa Llamada Amor - 10
								years” (2021) Editorial project for Plataforma-285 and “Enjoy the Weather” (2021) by Teresa Silva. <br></br>
								<br></br>Since 2022, Brito started working as a Final Artwork Designer for Underdogs Gallery, collaborating on projects such as the MEO Kalorama Festival.
							</div>
						</div>
						<div className='services'>
							<div className='services__flex'>
								<div className='title'>Services</div>
								<ul>{skills && skills.map((skill, index) => <li key={`skill_${index}`}>{skill}</li>)}</ul>
							</div>
							<div className='services__flex'>
								<div className='title'>Clients & Partnership</div>
								<ul>{clients && clients.map((client, index) => <li key={`client_${index}`}>{client}</li>)}</ul>
							</div>
						</div>
						<div className='exhibitions'>
							<div className='title'>Exhibitions</div>
							<div>
								<ul>{exhibitions && exhibitions.map((exhibition, index) => <li key={`exhibition_${index}`}>{exhibition}</li>)}</ul>
							</div>
						</div>
						<div className='education'>
							<div className='title'>Education</div>
							<div>
								<ul>{education && education.map((edu, index) => <li key={`exhibition_${index}`}>{edu}</li>)}</ul>
							</div>
						</div>
					</div>

					<div className='about__flex fixo'>
						For any further details or work inquiries, please send an email to<br></br> diogobrito74@gmail.com
						<br></br>
						<br></br>
						<Link to='https://github.com/diogofbrito' target='_blank' rel='noopener noreferrer'>
							Github
						</Link>
						<br></br>
						<Link to='https://www.ostand.pt' target='_blank' rel='noopener noreferrer'>
							Stand Project
						</Link>
						<br></br>
						<Link to='https://www.ostand.pt' target='_blank' rel='noopener noreferrer'>
							Instagram
						</Link>
						<br></br>
						<Link to='https://www.linkedin.com/in/diogofcbrito/' target='_blank' rel='noopener noreferrer'>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
