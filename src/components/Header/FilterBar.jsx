import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext.jsx';
import { SearchByWords } from './SearchByWords.jsx';
import { Category } from './Category.jsx';
import { Years } from './Years.jsx';

export function FilterBar() {
	const { searchTerm, setSearchTerm, uniqueYears, selectedYear, setSelectedYear, filteredProjects, selectedCategory, setSelectedCategory, uniqueCategories } = useContext(FilterContext);

	return (
		<div className='w-full flex gap-1 justify-center items-center max-md:hidden'>
			<SearchByWords searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Years uniqueYears={uniqueYears} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
			<Category uniqueCategories={uniqueCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
			<div className='h-full px-4 rounded-3xl flex justify-center items-center darkBorder'>
				<span className='leading-3 pt-1 flex items-center'>{filteredProjects.length} results</span>
			</div>
		</div>
	);
}
