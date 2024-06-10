import axios from 'axios';

const api = axios.create({
	baseURL: '/data',
});

export async function getProjWithCache() {
	const cachedProjects = localStorage.getItem('cachedProjects');
	if (cachedProjects) {
		return JSON.parse(cachedProjects);
	} else {
		const response = await getProj();
		localStorage.setItem('cachedProjects', JSON.stringify(response));
		return response;
	}
}
export async function getProj() {
	const response = await api.get('/mainProjectsData.json');
	return response.data;
}

