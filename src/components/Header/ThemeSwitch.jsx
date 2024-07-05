import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeSwitch() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useState(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		if (theme === 'dark') {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [theme]);

	return (
		<button className='bg-[#c5c5c5]/50 rounded-custom py-2 px-4' onClick={toggleTheme} aria-label='Toggle theme'>
			{theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
		</button>
	);
}
