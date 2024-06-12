import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
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
					<NavLink to='/' className='navlink'>
						Diogo Brito
					</NavLink>

					<div style={{ display: 'flex', gap: '1rem' }}>
						{currentPath !== '/works' && (
							<NavLink to='/works' className='navlink'>
								Works
							</NavLink>
						)}

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
						<NavLink to='/about' className='navlink'>
							About
						</NavLink>
						<ThemeSwitch />
					</div>
				</div>
			</div>
		</div>
	);
}
