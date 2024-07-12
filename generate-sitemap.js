import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const sitemapPath = path.join(distDir, 'sitemap.xml');

try {
	mkdirSync(distDir, { recursive: true });
} catch (err) {
	console.error('Erro ao criar o diretório "dist":', err);
	process.exit(1);
}

const projects = [
	{
		id: 'Percurso',
		title: 'Percurso - José Teixeira',
	},
	{
		id: 'LeroyMerlin',
		title: 'Leroy Merlin x CCP',
	},
	{
		id: 'WastedRita',
		title: 'Wasted Rita',
	},
	{
		id: 'Kalorama',
		title: 'Meo Kalorama Festival x Underdogs Gallery',
	},
	{
		id: 'StandUmbigo',
		title: 'Stand Project x National Coach Museum',
	},
	{
		id: 'Novocine',
		title: 'Novocine',
	},
	{
		id: 'AlexDarling',
		title: 'Alex Darling',
	},
	{
		id: 'JonasLander',
		title: 'Jonas&Lander',
	},
	{
		id: 'Limit',
		title: 'Limit of Disappearance',
	},
	{
		id: 'Stand1.0',
		title: 'Stand 1.0',
	},
	{
		id: 'FilipaNunes',
		title: 'Filipa Nunes',
	},
	{
		id: 'TeoriasDaInspiracao',
		title: 'Teorias da Inspiração - Filme by David Marques',
	},
	{
		id: 'Amadora3',
		title: 'Amadora-3',
	},
	{
		id: 'EsaCosa',
		title: 'Esa Cosa Llamada Amor by Plataforma 285',
	},
	{
		id: 'StandProject',
		title: 'Stand Project',
	},
	{
		id: 'AntónioCastro',
		title: 'António Castro Studio',
	},
	{
		id: 'EnjoyWeather',
		title: 'Enjoy the Weather by Teresa Silva',
	},
	{
		id: 'Critique',
		title: 'Critique by David Marques & Tiago Cadete',
	},
	{
		id: 'HelmutLang',
		title: 'Helmut Lang - Tshirt Contest',
	},
	{
		id: 'DancaSemVergonha',
		title: 'Dança sem Vergonha by David Marques',
	},
	{
		id: 'MisterioDaCultura',
		title: 'Mistério da Cultura by David Marques',
	},
];

const staticLinks = [
	{ url: '/', changefreq: 'daily', priority: 0.8 },
	{ url: '/works', changefreq: 'monthly', priority: 0.7 },
];

const dynamicLinks = projects.map(project => ({
	url: `/works/${project.id}`,
	changefreq: 'monthly',
	priority: 0.5,
}));

const links = [...staticLinks, ...dynamicLinks];

const sitemap = new SitemapStream({ hostname: 'https://www.diogobrito.xyz' });
const writeStream = createWriteStream(sitemapPath);

sitemap.pipe(writeStream).on('error', error => {
	console.error('Erro ao criar sitemap:', error);
});

(async () => {
	try {
		for (const link of links) {
			sitemap.write(link);
		}
		sitemap.end();
		await streamToPromise(sitemap);
		console.log('Sitemap criado com sucesso!');
	} catch (error) {
		console.error('Erro ao criar sitemap:', error);
	}
})();