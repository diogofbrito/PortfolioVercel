export function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'SET_PROJECTS':
			return { ...state, projects: payload };
		case 'SET_ABOUT':
			return { ...state, about: payload };

		default:
			return state;
	}
}
