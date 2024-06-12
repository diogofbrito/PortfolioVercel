import React, { useContext, useState, useEffect, useRef } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Years() {
	const { uniqueYears, selectedYear, setSelectedYear } = useContext(FilterContext);
	const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = year => {
		setSelectedYear(year);
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
				<button className='selected-value'>
					{selectedYear} {isOpen ? <ChevronUp /> : <ChevronDown />}
				</button>
				{isOpen && (
					<ul className='options'>
						{uniqueYears.map(year => (
							<li key={year} onClick={() => handleOptionClick(year)}>
								{year}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
