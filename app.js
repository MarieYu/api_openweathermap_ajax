// app.js
$(function(){

	var cityInput = $('#city');
	
	var title = $('#title');
	var dataContainer = $('#cityWeather');
	var spanMap = $('#map');
	var spanInfo = $('#info');
	var spanIcon = $('#icon');
	var spanTemp = $('#temp');
	
	var dataPrevisions = $("#previsions");

	//table week days
	var weekDay = [
		"lundi",
		"mardi",
		"mercredi",
		"jeudi",
		"vendredi",
		"samedi",
		"dimanche",
	];
	//table months
	var months = [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre",
	];



//on click submit, add city weather on the same page in dataContainer
$('#cityForm').on('submit', function(e){
	$('#map').empty(); $('#info').empty(); $('#icon').empty(); $('#temp').empty();
	$("#previsions").empty();
    e.preventDefault();
    var cityName = cityInput.val();
    cityInput.val('');

    
  	// Day weather
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID=b9f2c3284d886b97fdbe265ca73b2a4c"

	}).done(function(data){
		var cityWeather = new CityWeather(data);
		var iconId = cityWeather.getIconId();
	    var img = $('<img src="img/'+iconId+'.png"/>');
	    img.attr("class","iconWeather");
	    img.attr("id", "iconCurrentDay");
		var ul = $('<ul>');

		//See date of current day
		var month = cityWeather.getDateSec().getMonth();
		months.forEach(function(elem, id){
			if(id === month){
				title.append("Météo du "+ cityWeather.getDateSec().getDate()+" "+elem+ " pour "+cityName);
			}
		});	
		ul.append("<li> Heure de mesure : " + cityWeather.getMeasureHourFR() +"</li>");
		ul.append("<li> Lever du soleil : "+ cityWeather.getSunriseHourFR() +"</li>");
		ul.append("<li> Coucher du soleil : "+ cityWeather.getSunsetHourFR() +"</li>");
		ul.append("<li> Humidité : "+ cityWeather.getHumidity() +" %</li>");
		ul.append("<li> Pression : "+ cityWeather.getPressure() +" hPa</li>");
		ul.append("<li> Vitesse du vent : "+ cityWeather.getWindSpeedFR() +" km/h</li>");

		spanInfo.append(ul);
		spanIcon.append(img);
	    var p = $('<p>');
	    p.html(cityWeather.getTempC() +" °C");
	    spanTemp.append(p);

		//Add localisation
		if(data){		
			var map = $('<img>');
			map.attr("src", "https://maps.googleapis.com/maps/api/staticmap?center="+cityWeather.getLat()+","+cityWeather.getLon()+"&zoom=12&size=250x250&key=AIzaSyBMPVNGjluoxeo6mZaDfTjAUTOb0yzQbuw")
			spanMap.append(map);
		}
		else{
			dataContainer.append('Pas de carte disponible');
		}
	
		dataContainer.append(spanMap);
		dataContainer.append(spanInfo);
		dataContainer.append(spanIcon);
		dataContainer.append(spanTemp);

	}).fail(function(jqXHR, textStatus, errorThrown){
		dataContainer.append('Pas de données');
	});


	// Forecast Weather
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityName+"&cnt=6&APPID=b9f2c3284d886b97fdbe265ca73b2a4c"

	}).done(function(data){
		
		//object cityPrevision with 6 days of data
		var cityPrevision = new CityPrevision(data);
		
		// div dataPrevisions
		dataPrevisions.append("<h3>Prévisions pour la ville de "+cityName+"</h3>");

		for(var ii = 1; ii < cityPrevision.getList().length; ii++){
			var figure = $('<figure>');
			var figcaption = $('<figcaption>');

			var day = cityPrevision.findDateSec(ii-1).getDay();//get num day (ii-1 for equivalence with id)
			weekDay.forEach(function(elem, id){
				if(id === day){//id 1 to 7
					figcaption.html(elem);//get day name
				}
			});
					
			var icon = cityPrevision.getIconDay(ii).substring(0,2);
			var img = $('<img src="img/'+icon+'d.png"/>');
			img.attr("class", "iconWeather");
			figure.append(img);
			figure.append(figcaption);
			dataPrevisions.append(figure);
		}


	}).fail(function(jqXHR, textStatus, errorThrown){
		dataPrevisions.append('Pas de données');
	});


});


});


