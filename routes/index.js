var express = require('express');
var router = express.Router();
var getWeather = require('../weatherAPI/data')
const weatherData = {
	"2018-11-5": "Foggy",
	"2018-11-4": "Rain",
}
/* GET home page. */
router.get('/:date/:lat/:long', async function (req, res, next) {
	console.log(req.params.date, req.params.lat, req.params.long)
	let rs = await getWeather(req.params.date, req.params.lat, req.params.long)
	console.log(rs);
	res.send(JSON.stringify(rs))
});

module.exports = router;
