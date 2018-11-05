var create = require('axios').create

const weatherAPI = create({
	baseURL: `https://api.darksky.net/forecast/${process.env.WEATHER_API}/`,
	timeout: 30000,
	// params: {
	// 	key: process.env.WEATHER_API
	// }
})

const getWeather = async (date, lat, long) => {
	let result = await weatherAPI.get(`${lat},${long},${date}`).then((rs) => rs, rs=> console.log(rs))
	console.log(result.data)
	return result.data
}

module.exports = getWeather