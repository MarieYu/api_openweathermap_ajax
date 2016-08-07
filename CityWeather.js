function CityWeather(data){
	if(data){
		this._measureDate = data.dt;
		this._sunrise = data.sys.sunrise;
		this._sunset = data.sys.sunset;
		this._humidity = data.main.humidity;
		this._pressure = data.main.grnd_level;
		this._windSpeed = data.wind.speed;
		this._icon = data.weather[0].icon;
		this._tempK = data.main.temp;
		this._latitude = data.coord.lat;
		this._longitude = data.coord.lon;
	}
}


CityWeather.prototype.getDate = function(){
	return (new Date(this._measureDate * 1000)).toLocaleString();
};

CityWeather.prototype.getDateSec = function(){
	return (new Date(this._measureDate * 1000));
};

CityWeather.prototype.getMeasureHourFR = function(){
	var date = new Date(this._measureDate * 1000);
	return (date.getHours()+"h"+date.getMinutes()+"min");
};

CityWeather.prototype.getSunriseHourFR = function(){
	var date = new Date(this._sunrise * 1000);
	return (date.getHours()+"h"+date.getMinutes()+"min");
};

CityWeather.prototype.getSunsetHourFR = function(){
	var date = new Date(this._sunset * 1000);
	return (date.getHours()+"h"+date.getMinutes()+"min");
};

CityWeather.prototype.getHumidity = function(){
	return this._humidity;
};

CityWeather.prototype.getPressure = function(){
	return Math.round(this._pressure);
};
CityWeather.prototype.getWindSpeed = function(){
	return this._windSpeed;
};

CityWeather.prototype.getWindSpeedFR = function(){
	return Math.round(this._windSpeed*3600/1000);
};

CityWeather.prototype.getIconId = function(){
	return this._icon;
};

CityWeather.prototype.getIcon = function(){
	return this._icon;
};

CityWeather.prototype.getTempC = function(){
	return Math.round(this._tempK-273.15);
};

CityWeather.prototype.getLat = function(){
	return this._latitude;
};

CityWeather.prototype.getLon = function(){
	return this._longitude;
};


