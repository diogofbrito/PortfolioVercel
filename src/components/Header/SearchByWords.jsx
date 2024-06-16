import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext.jsx'; 
import { Search } from 'lucide-react';

export function SearchByWords() {
	const { searchTerm, setSearchTerm } = useContext(FilterContext);

	return (
		<div className='search'>
			<input type='text' placeholder='Search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
			<span className='search__icon'>
				<Search color='var(--background-color-dark)' size={20} />
			</span>
		</div>
	);
}
