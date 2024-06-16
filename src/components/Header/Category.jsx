import React, { useContext, useState, useEffect, useRef } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Category() {
	const { uniqueCategories, selectedCategory, setSelectedCategory } = useContext(FilterContext);
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = category => {
		setSelectedCategory(category);
		setIsOpen(false);
	};

	const handleClickOutside = event => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className='dropdown-container' ref={dropdownRef}>
			<div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
				<button className='selected-value' aria-label='Category'>
					{selectedCategory}
					{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
				</button>

				{isOpen && (
					<ul className='options'>
						{uniqueCategories.map(category => (
							<li key={category} onClick={() => handleOptionClick(category)}>
								{category}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
