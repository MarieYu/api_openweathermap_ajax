
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Ajax</title>
	<script src="https://code.jquery.com/jquery-2.2.0.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="styles.css">
	<script src="CityWeather.js"></script>
	<script src="CityPrevision.js"></script>
	<script src="app.js"></script>
</head>
<body>
	<h1>STATION METEO</h1>

	<h3>Rechercher une ville</h3>	
	<form id="cityForm">
    <label> Ville 
      <input type="text" id="city" placeholder="ex: Nantes">
    </label>
    <input type="submit" value="envoyer"/>
  </form>
	<h3 id="title"></h3>
	<span id="cityWeather">
		<span id="map"></span>
		<span id="info"></span>
		<span id="icon"></span>
		<span id="temp"></span>
	</span>
	<div id="previsions"></div>

</body>
</html>