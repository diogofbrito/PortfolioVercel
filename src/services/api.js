import axios from 'axios';

const api = axios.create({
	baseURL: '/data',
});

export async function getProjects() {
	try {
		const response = await api.get('/projectsData.json');
		return response.data;
	} catch (error) {
		console.error('Erro ao obter dados do servidor:', error);
		throw error;
	}
}
