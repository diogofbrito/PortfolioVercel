import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext.jsx';
import { SearchByWords } from './SearchByWords.jsx';
import { Category } from './Category.jsx';
import { Years } from './Years.jsx';

export function FilterBar() {
	const { searchTerm, setSearchTerm, uniqueYears, selectedYear, setSelectedYear, filteredProjects, selectedCategory, setSelectedCategory, uniqueCategories } = useContext(FilterContext);

	return (
		<div className='filter__bar'>
			<SearchByWords searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Years uniqueYears={uniqueYears} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
			<Category uniqueCategories={uniqueCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
			<div className='results' >{filteredProjects.length} results</div>
			
		</div>
	);
}
