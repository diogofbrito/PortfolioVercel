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
		<div className='relative w-56 mx-auto h-full' ref={dropdownRef}>
			<div className={`flex flex-col w-full h-full cursor-pointer relative ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
				<button className='bg-[#c5c5c5]/50 rounded-3xl leading-3 py-2.5 px-4 flex items-end h-full justify-between hover:bg-[#c5c5c5]/80' aria-label='Category'>
					{selectedCategory}
					{isOpen ? <ChevronUp size={20} className='flex items-center h-full' /> : <ChevronDown size={20} className='flex items-center h-full' />}
				</button>

				{isOpen && (
					<ul className='list-none pt-2 mt-10 rounded-3xl bg-[#e2e2e2] max-h-200 overflow-y-auto absolute w-full z-10 darkOptions'>
						{uniqueCategories.map(category => (
							<li key={category} onClick={() => handleOptionClick(category)} className='py-1 px-4 OptionsHover'>
								{category}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
