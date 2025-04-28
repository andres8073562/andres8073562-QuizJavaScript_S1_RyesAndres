fetch(' http://api.weatherapi.com/v1/.json?key=[40f040b5a8f44270ad2120233252804[]&q=Floridablanca&lang=es')
    .then(response => response.json())
    .then(data => console.log(data));

function Interface() {

    let name = document.getElementById("name").value;
    let  region = document.getElementById("region").value;
    let country = document.getElementById("country").value;
    let lat = document.getElementById("lat").value;
    let lon = document.getElementById("lon").value;

}
Interface()