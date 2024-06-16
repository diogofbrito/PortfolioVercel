import React, { useState } from 'react';

export function ContentImgs({ images }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleImageClick = index => {
		setCurrentImageIndex(index);
	};

	return (
		<div className='additional-images-carousel'>
			<div className='thumbnails'>
				{images.map((image, index) => (
					<img key={index} src={image} alt={`Image ${index}`} onClick={() => handleImageClick(index)} className={index === currentImageIndex ? 'active' : ''} />
				))}
			</div>
			<div className='main-image'>
				<img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
			</div>
		</div>
	);
}

