fetch(' http://api.weatherapi.com/v1')
.then(response => response.json())
.then(data => console.log(data));

