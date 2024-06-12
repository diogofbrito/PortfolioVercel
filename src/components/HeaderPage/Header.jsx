import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import './style.css';
import { FilterBar } from './FilterBar.jsx';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch.jsx';

export function Header() {
	const location = useLocation();
	const currentPath = location.pathname;
	const { searchTerm, setSearchTerm, selectedYear, setSelectedYear, filteredProjects, uniqueYears } = useContext(FilterContext);

	return (
		<div className='navbar'>
			<div className='container'>
				<div className='navbar__item'>
					<NavLink to='/'>Diogo Brito</NavLink>

					<div style={{ display: 'flex', gap: '1rem' }}>
						{currentPath !== '/works' && <NavLink to='/works'>Works</NavLink>}

						{currentPath === '/works' && (
							<FilterBar
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
								uniqueYears={uniqueYears}
								selectedYear={selectedYear}
								setSelectedYear={setSelectedYear}
								filteredProjects={filteredProjects}
							/>
						)}
					</div>

					<div style={{ display: 'flex', gap: '1rem' }}>
						<NavLink to='/about'>About</NavLink>
						<ThemeSwitch />
					
					</div>
				</div>
			</div>
		</div>
	);
}
