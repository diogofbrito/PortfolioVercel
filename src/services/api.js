import axios from 'axios';

const api = axios.create({
	baseURL: '/data',
});

export const getProjWithCache = async () => {
	const cachedData = JSON.parse(localStorage.getItem('projectData')) || {};
	const cachedTimestamp = cachedData.timestamp;

	if (cachedTimestamp && Date.now() - cachedTimestamp < 24 * 60 * 60 * 1000) {
		return cachedData.projects;
	}

	const response = await api.get('/mainProjectsData.json');
	const projects = response.data;

	localStorage.setItem(
		'projectData',
		JSON.stringify({
			projects,
			timestamp: Date.now(),
		}),
	);

	return projects;
};
