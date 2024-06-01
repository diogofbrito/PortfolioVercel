import axios from 'axios';

const api = axios.create({
	baseURL: '../../public/data',
});

export async function getProj() {
	const response = await api.get('/mainProjectsData.json');
	return response.data;
}

export async function getAbout() {
	const response = await api.get('/aboutData.json');
	return response.data;
}

export async function getIntro() {
	const response = await api.get('/introProjectsData.json');
	return response.data;
}
