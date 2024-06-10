export function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'SET_PROJECTS':
			return { ...state, projects: payload };
		

		default:
			return state;
	}
}
