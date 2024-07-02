import React from 'react';
import LazyLoad from 'react-lazyload';

export function WorkItem({ project }) {
	const { id, title, placeholder, category } = project;

	return (
		<div className='work__item'>
			
			<div key={id} className='image-container'>
				<LazyLoad>
					<img src={placeholder} alt={title} loading='lazy'/>
				</LazyLoad>
			</div>
			 <div className='title__intro'>
				<p>{title}</p>
				 <div className='name__type'>{Array.isArray(category) ? category.map((cat, index) => <div key={index}>{cat}</div>) : <div>{category}</div>}</div> 
			</div> 
		</div>
	);
}
