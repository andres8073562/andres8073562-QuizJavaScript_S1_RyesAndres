
const city = 'Floridablanca';
const aqi = 'yes';
const apikey = 'a5da6ef1a5814bbea7c162012240703';
// ...
const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=${aqi}`;

fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
    }
    return response.json();
})
.then(data => {
    
    document.getElementById('temperatura').textContent = data.current.temp_c + '°C';
    document.getElementById('pais').textContent = data.location.name;
    document.getElementById('ciudad').textContent = data.location.country + ',';
    document.getElementById('hora').textContent = data.location.localtime;
    document.getElementById('estado').srcContent = data.current.condition.icon;
    
});
fetch(url)