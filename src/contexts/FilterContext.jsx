import React, { createContext, useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
	const { projects } = useContext(AppContext);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedYear, setSelectedYear] = useState('Years');
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [uniqueYears, setUniqueYears] = useState(['Years']);

	
	useEffect(() => {
		if (projects.length > 0) {
			const years = new Set(['Years']);
			projects.forEach(project => years.add(project.year));
			setUniqueYears(Array.from(years));
		}
	}, [projects]); 

	useEffect(() => {
		if (projects.length > 0) {
		
			const filtered = projects.filter(project => {
				const titleMatch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
				const categoryMatch = Array.isArray(project.category)
					? project.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
					: project.category?.toLowerCase().includes(searchTerm.toLowerCase());
				const yearMatch = selectedYear === 'Years' || project.year === parseInt(selectedYear);
				return (titleMatch || categoryMatch) && yearMatch; 
			});
			setFilteredProjects(filtered);
		}
	}, [projects, searchTerm, selectedYear]);

	return (
		<FilterContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				selectedYear,
				setSelectedYear,
				uniqueYears,
				filteredProjects,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}
