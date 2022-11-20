const fs = require('fs');
const stay = JSON.parse(fs.readFileSync('./data/stay.json', 'utf8'));

const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: pageTitle, stay});
}

module.exports = {
    rooms
}