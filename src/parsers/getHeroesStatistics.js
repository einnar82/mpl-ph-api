import axios from 'axios';
import cheerio from 'cheerio';

exports.parseHeroesStatistics = async () => {

	const response = await axios.get("https://ph-mpl.com/en/data#hero");
	console.log(response.status);
	if(response.status !== 200) return null;

	const $ = cheerio.load(response.data);

	const table = $('.table-hero-stats').find('tbody tr');
	const parsedData = table.map((i, el) => {
		const tableData = Array.from($(el).find('td'));
		const heroName = $(tableData[0]).text().trim();
		const pickCount = $(tableData[1]).text().trim();
		const banCount = $(tableData[2]).text().trim();
		const winRate = $(tableData[3]).text().trim();

		return {
			heroName,
			pickCount,
			banCount,
			winRate
		};
	});
	return Array.from(parsedData);

};
