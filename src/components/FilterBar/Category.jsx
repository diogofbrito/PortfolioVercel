import React, { useContext, useState } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import { ChevronDown } from 'lucide-react';


export function Category() {
	const { uniqueCategories, selectedCategory, setSelectedCategory } = useContext(FilterContext);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = category => {
		setSelectedCategory(category);
		setIsOpen(false);
	};

	return (
		<div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
			<button className='selected-value'>
				{selectedCategory}
				<ChevronDown />
			</button>

			<ul className='options'>
				{uniqueCategories.map(category => (
					<li key={category} onClick={() => handleOptionClick(category)}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}
