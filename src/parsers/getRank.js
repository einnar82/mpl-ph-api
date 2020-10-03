const axios = require('axios');
const cheerio = require('cheerio');

exports.getRank = async () => {
    const response = await axios.get("https://ph-mpl.com/en/data");
    let rank = [];

    if(response.status === 200){
      let $ = cheerio.load(response.data);
      let data = $('.rank-no', $.html());
      for(let i=0; i<data.length; i++){
        let t = data[i].children[2].data;
        t = t.replace(/\s/g, '');
        rank.push(t);
      }
    }
    return rank;
  } 