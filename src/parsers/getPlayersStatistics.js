const axios = require("axios");
const cheerio = require("cheerio");

exports.parsePlayerStatistitcs = async () => {
  const response = await axios.get("https://ph-mpl.com/en/data#player");

  if (response.status === 200) {
    const $ = cheerio.load(response.data);
    const table = $("#table-stats").find("tr");

    const result = table.map((i, tr) => {
      const td = $(tr).find("td");
      const list = Array.from(td);
      const profilePictureImgSrc = $(list[0]).find("img").attr("src");
      const teamName = $(list[1]).find("span").text().trim();
      const kills = $(list[2]).text().trim();
      const deaths = $(list[3]).text().trim();
      const assists = $(list[4]).text().trim();
      const kda = $(list[5]).text().trim();
      const heroDamage = $(list[6]).text().trim();
      const damageTaken = $(list[7]).text().trim();

      return {
        profilePictureImgSrc,
        teamName,
        kills,
        deaths,
        assists,
        kda,
        heroDamage,
        damageTaken,
      };
    });
    return Array.from(result);
  }
  return null;
};
