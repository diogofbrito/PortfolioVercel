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
		<div className='navbar container'>
			<NavLink to='/' className='navlink'>
				Diogo Brito
			</NavLink>

			<div className='filters'>
				{currentPath !== '/works' && (
					<NavLink to='/works' className='navlink'>
						Works
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
						<button className='listOption' onClick={toggleViewMode}>
							{isListView ? <LayoutGrid size={20} /> : <List size={20} />}
						</button>
					</>
				)}
			</div>

			<ThemeSwitch />
		</div>
	);
}
