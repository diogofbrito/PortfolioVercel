import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import { ViewContext } from '../../contexts/ViewContext';
import { FilterBar } from './FilterBar.jsx';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch.jsx';
import { List, LayoutGrid } from 'lucide-react';

export function Header() {
	const location = useLocation();
	const currentPath = location.pathname;
	const { searchTerm, setSearchTerm, selectedYear, setSelectedYear, filteredProjects, uniqueYears } = useContext(FilterContext);
	const { isListView, toggleViewMode } = useContext(ViewContext);

	if (currentPath === '/') {
		return null;
	}

	return (
		<div className='margin-general z-50 flex justify-between'>
			<NavLink to='/' className='h-9 px-2.5 bg-[#c5c5c5]/50 rounded-3xl flex justify-center items-center hover:bg-[#c5c5c5]/80'>
				<span className='leading-3 p-2.5 flex items-end h-full'>Diogo Brito</span>
			</NavLink>

			<div className='flex gap-1 h-9 '>
				{currentPath !== '/works' && (
					<NavLink to='/works' className='h-9 px-2.5 bg-[#c5c5c5]/50 rounded-3xl flex justify-center items-center hover:bg-[#c5c5c5]/80'>
						<span className='leading-3 p-2.5 flex items-end h-full'>Back</span>
					</NavLink>
				)}

				{currentPath === '/works' && (
					<>
						<FilterBar
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							uniqueYears={uniqueYears}
							selectedYear={selectedYear}
							setSelectedYear={setSelectedYear}
							filteredProjects={filteredProjects}
						/>
						<button className='bg-[#c5c5c5]/50 rounded-3xl py-2.5 px-4 flex items-center hover:bg-[#c5c5c5]/80' onClick={toggleViewMode}>
							{isListView ? <LayoutGrid size={20} /> : <List size={20} />}
						</button>
					</>
				)}
			</div>

			<ThemeSwitch />
		</div>
	);
}
