import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext.jsx';
import { SearchByWords } from './SearchByWords.jsx';
import { Category } from './Category.jsx';
import { Years } from './Years.jsx';

export function FilterBar() {
	const { searchTerm, setSearchTerm, uniqueYears, selectedYear, setSelectedYear, filteredProjects, selectedCategory, setSelectedCategory, uniqueCategories } = useContext(FilterContext);

	return (
		<div className='w-full flex gap-3 justify-center items-center max-md:hidden'>
			<SearchByWords searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Years uniqueYears={uniqueYears} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
			<Category uniqueCategories={uniqueCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
			<div className='flex items-center justify-center text-base rounded-custom leading-4 py-2 px-4 darkBorder'>{filteredProjects.length} results</div>
		</div>
	);
}
