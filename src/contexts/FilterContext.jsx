import React, { createContext, useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
	const { projects } = useContext(AppContext);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedYear, setSelectedYear] = useState('Years');
	const [selectedCategory, setSelectedCategory] = useState('All Categories');
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [uniqueYears, setUniqueYears] = useState(['Years']);
	const [uniqueCategories, setUniqueCategories] = useState(['All Categories']);

	useEffect(() => {
		if (projects.length > 0) {
			const years = new Set(['Years']);
			const categories = new Set(['All Categories']);
			projects.forEach(project => {
				years.add(project.year);
				if (Array.isArray(project.category)) {
					project.category.forEach(cat => categories.add(cat));
				} else if (typeof project.category === 'string') {
					categories.add(project.category);
				}
			});
			setUniqueYears(Array.from(years));
			setUniqueCategories(Array.from(categories));
		}
	}, [projects]);

	useEffect(() => {
		let filtered = projects;
		if (selectedYear !== 'Years') {
			filtered = filtered.filter(project => project.year === parseInt(selectedYear));
		}
		if (selectedCategory !== 'All Categories') {
			filtered = filtered.filter(project => {
				if (Array.isArray(project.category)) {
					return project.category.includes(selectedCategory);
				} else if (typeof project.category === 'string') {
					return project.category === selectedCategory;
				}
				return false;
			});
		}
		if (searchTerm.trim() !== '') {
			const regex = new RegExp(searchTerm.trim(), 'i');
			filtered = filtered.filter(project => regex.test(project.title));
		}
		setFilteredProjects(filtered);
	}, [projects, searchTerm, selectedYear, selectedCategory]);

	return (
		<FilterContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				selectedYear,
				setSelectedYear,
				selectedCategory,
				setSelectedCategory,
				uniqueYears,
				uniqueCategories,
				filteredProjects,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}
