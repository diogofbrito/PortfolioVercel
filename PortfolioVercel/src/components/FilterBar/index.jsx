import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext.jsx';
import { SearchBar } from './Seach/index.jsx';
import { Years } from './Years/index.jsx';
import "./style.css";

export function FilterBar() {
	const { searchTerm, setSearchTerm, uniqueYears, selectedYear, setSelectedYear, filteredProjects } = useContext(FilterContext);

	return (
		<div style={{ display: 'flex', justifyContent: 'start', gap: '1rem' }}>
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Years uniqueYears={uniqueYears} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
			<div className='results__count'>{filteredProjects.length} results</div>
		</div>
	);
}
