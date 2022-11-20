const fs = require('fs');
const vacationNews = JSON.parse(fs.readFileSync('./data/vacationNews.json', 'utf8'));
const vacationTips = JSON.parse(fs.readFileSync('./data/vacationTips.json', 'utf8'));

const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: pageTitle, vacationNews, vacationTips});
}

module.exports = {
    news
}