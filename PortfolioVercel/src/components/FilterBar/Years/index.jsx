import React, { useContext, useState } from 'react';
import { FilterContext } from '../../../contexts/FilterContext';
import { ChevronDown } from 'lucide-react';
import './style.css';

export function Years() {
	const { uniqueYears, selectedYear, setSelectedYear } = useContext(FilterContext);
	const [isOpen, setIsOpen] = useState(false); 

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = year => {
		setSelectedYear(year);
		setIsOpen(false); 
	};

	return (
		<div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
			<button className='selected-value'>
				{selectedYear}
				<ChevronDown />
			</button>

			<ul className='options'>
				{uniqueYears.map(year => (
					<li key={year} onClick={() => handleOptionClick(year)}>
						{year}
					</li>
				))}
			</ul>
		</div>
	);
}
