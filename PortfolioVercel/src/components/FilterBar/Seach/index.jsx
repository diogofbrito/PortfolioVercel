import React, { useContext } from 'react';
import { FilterContext } from '../../../contexts/FilterContext.jsx'; 
import './style.css';
import { Search } from 'lucide-react';

export function SearchBar() {
	const { searchTerm, setSearchTerm } = useContext(FilterContext);

	return (
		<div className='search__bar'>
			<input type='text' placeholder='Search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
			<span className='search__icon'>
				<Search color='var(--background-color-dark)' />
			</span>
		</div>
	);
}
