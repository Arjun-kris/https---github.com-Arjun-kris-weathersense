const url =
    'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
    'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
    api('trivandrum');
});

async function api(cName) {
    const temp =
        `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weather(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weather(data) {
    $('#city-name').html(`${data.name}`);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm a'));
    $('#temperature').html(`${data.main.temp}°C`);
    $('#get').html(`${data.main.pressure}`);
    $('#description').html(`${data.weather[0].description}`);
    $('#wind-speed').html(`${data.wind.speed} m/s`);
    console.log(typeof (data.wind.speed));
    $('#weather-icon').attr('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    $('#weather-info').fadeIn();
}
