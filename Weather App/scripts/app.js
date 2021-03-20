const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update the night & day icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime? 'img/day.svg': 'img/night.svg';
    time.setAttribute('src', timeSrc);

    // remove the d-none class if present
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {
    // console.log(city);
    const cityDetails = await getCity(city);
    const Weather = await getWeather(cityDetails.Key);
    
    return {
        cityDets: cityDetails,
        weather: Weather
    };
};

// when user press enter
cityForm.addEventListener('submit', (e) => {
    // prevent the default behavior
    e.preventDefault();

    // get city value
    const City = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    updateCity(City)
        .then(data => updateUI(data))
        .catch(error => console.log(error));
});