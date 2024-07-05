import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext.jsx'; 
import { Search } from 'lucide-react';

export function SearchByWords() {
	const { searchTerm, setSearchTerm } = useContext(FilterContext);

	return (
		<div className='flex bg-[#c5c5c5]/50 rounded-custom py-3 px-4 items-center'>
			<input
				type='text'
				placeholder='Search'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				className='flex-grow border-none bg-transparent p-0 mr-2 outline-none text-base leading-none search  '
			/>
			<span className='w-5 h-3 flex justify-center items-center'>
				<Search size={20} />
			</span>
		</div>
	);
}
