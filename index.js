async function getWeather(position) {

	const response = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=69f3c8ccb02e488cbd7133236220807&q=${position.coords.latitude},${position.coords.longitude}`
	);

	const data = await response.json();

	document.getElementById("temperature").innerHTML = data.current.temp_c;
	document.getElementById("location").innerHTML =
		data.location.name + "," + data.location.region;
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getWeather, showError);
	} else {
		console.log("The Browser Does not Support Geolocation");
	}
};

function showError(error) {
	if (error.PERMISSION_DENIED) {
		console.log("The User have denied the request for Geolocation.");
	}
}

getLocation();