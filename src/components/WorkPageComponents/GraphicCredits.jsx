import React from 'react';

export function GraphicCredits({ graphic }) {
	if (!graphic) {
		return null; // Retorna null se não houver informações gráficas
	}

	return (
		<div className='text grid'>
			<div></div>
			<div>
				{graphic.designer && (
					<div className='graphic-item'>
						<h3>Designer</h3>
						<p>{graphic.designer}</p>
					</div>
				)}
				{graphic.software && (
					<div className='graphic-item'>
						<h3>Software</h3>
						<p>{graphic.software}</p>
					</div>
				)}
				{graphic.links && graphic.links.length > 0 && (
					<div className='graphic-item'>
						<h3>Graphic Links</h3>
						<ul>
							{graphic.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<a href={link.link} target='_blank' rel='noopener noreferrer'>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
