async function weatherData(cityName)
{
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=653c1c3f5ba93c18b1f245a53eacc9b5`;
	let response = await fetch(url);
	let data = await response.json();
	console.log(data); 
}

function fetchCity()
{
	let cityName = document.getElementById("city_Name");
	if (cityName.value==="") 
	{
		alert("Enter a city");
	} 
	else 
	{
		weatherData(cityName.value);
		cityName.value="";

	}
}