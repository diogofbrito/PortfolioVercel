import React, { createContext, useState } from 'react';

export const ViewContext = createContext();

export function ViewProvider({ children }) {
	const [isListView, setIsListView] = useState(false);

	const toggleViewMode = () => {
		setIsListView(!isListView);
	};

	return <ViewContext.Provider value={{ isListView, toggleViewMode }}>{children}</ViewContext.Provider>;
}
