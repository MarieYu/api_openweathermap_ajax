function CityPrevision(data){
	if(data){
		this._listDays = data.list;//array of objects days with weather data
	}
}


CityPrevision.prototype.getList = function(){
	return this._listDays;
};

//Find date of the day at the index of 
CityPrevision.prototype.findDateSec = function(index){
	return (new Date(this._listDays[index].dt*1000));
};

CityPrevision.prototype.getIconDay = function(index){
	return (this._listDays[index].weather[0].icon)
};