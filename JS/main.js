const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const search = document.querySelector("#searchhh");
const searchIcon = document.querySelector("#search-icon");
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let searchValue = '';




searchIcon.addEventListener('click', function () {
    gettingData(search.value);
})

search.addEventListener('keyup', function (e) {
    searchValue = search.value
    gettingData(searchValue);

})

async function gettingDataCairo()
{
    var citiData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5ea1184c6fc344dd99712317232304&q=Cairo&days=3`)
    if (citiData.status != 400) {
        const CairooData = await citiData.json();
        initialDisplay(CairooData);
        console.log(CairooData)
    }
}

async function gettingData(searchInput) {
    
    var citiData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5ea1184c6fc344dd99712317232304&q=${searchInput}&days=3`)
    if (citiData.status != 400) {
        const finalCityData = await citiData.json();
        displayData(finalCityData);
        
    }
}





function displayData(myData) {
    var mydate = new Date(`${myData.location.localtime}`)
    card1.innerHTML = `
      <div class="inner">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center\">
                            <p>${daysOfWeek[mydate.getDay()]}</p>
                            <p>${mydate.getDate()} ${months[mydate.getMonth()]}</p>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-center align-items-start">
                            <p class="city-name">${myData.location.name}</p>
                            <div class="d-flex justify-content-between align-items-center w-100">
                                <p class="city-temp text-white">${myData.current.temp_c}&#8451;</p>
                                <img src="${myData.current.condition.icon}" alt="">
                            </div>
                            <p class="weather-state">${myData.current.condition.text}</p>
                            <div class="d-flex flex-row justify-content-between align-items-center w-100">
                                <div class="d-flex justify-content-center align-items-baseline ">
                                    <i class="fa-solid fa-umbrella  card-icons me-1"></i>
                                    <p class="card-text">20%</p>
                                </div>
                                <div class="d-flex justify-content-center align-items-baseline">
                                    <i class="fa-solid fa-umbrella  card-icons me-1"></i>
                                    <p class="card-text">18 KM/h</p>
                                </div>
                                <div class="d-flex justify-content-center align-items-baseline">
                                    <i class="fa-solid fa-umbrella  card-icons me-1"></i>
                                    <p class="card-text">East</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    mydate = new Date(`${myData.forecast.forecastday[1].date}`)
    card2.innerHTML = `<div class="inner">
                    <div class="card">
                        <div class="card-header d-flex justify-content-center align-items-center">
                            <p>${daysOfWeek[mydate.getDay()]}</p>
                        </div>
                        <div class="card-body  d-flex flex-column justify-content-center align-items-center">
                            <img src="${myData.forecast.forecastday[1].day.condition.icon}" alt="" class="card-2-icon">
                            <div class="mb-5"> 
                                <p class="card-2-temp">${myData.forecast.forecastday[1].day.maxtemp_c}&#8451;</p>
                                <p class="card-2-humidity">${myData.forecast.forecastday[1].day.mintemp_c}&#8451;</p>
                            </div>
                            <p class="card-2-state">${myData.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                    </div>
                </div>`
    mydate = new Date(`${myData.forecast.forecastday[2].date}`)
    card3.innerHTML = `<div class="inner">
                                <div class="card">
                                    <div class="card-header d-flex justify-content-center align-items-center">
                                        <p>${daysOfWeek[mydate.getDay()]}</p>
                                    </div>
                                    <div class="card-body  d-flex flex-column justify-content-center align-items-center">
                                        <img src="${myData.forecast.forecastday[2].day.condition.icon}" alt="" class="card-2-icon">
                                        <div class="mb-5"> 
                                            <p class="card-2-temp">${myData.forecast.forecastday[2].day.maxtemp_c}&#8451;</p>
                                            <p class="card-2-humidity">${myData.forecast.forecastday[2].day.mintemp_c}&#8451;</p>
                                        </div>
                                        <p class="card-2-state">${myData.forecast.forecastday[2].day.condition.text}</p>
                                    </div>
                                </div>
                            </div>`
}

function initialDisplay(Dataaa) {

    var mydate = new Date(`${Dataaa.location.localtime}`)
    card1.innerHTML = `
      <div class="inner">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center\">
                            <p>${daysOfWeek[mydate.getDay()]}</p>
                            <p>${mydate.getDate()} ${months[mydate.getMonth()]}</p>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-center align-items-start">
                            <p class="city-name">${Dataaa.location.name}</p>
                            <div class="d-flex justify-content-between align-items-center w-100">
                                <p class="city-temp text-white">${Dataaa.current.temp_c}&#8451;</p>
                                <img src="${Dataaa.current.condition.icon}" alt="">
                            </div>
                            <p class="weather-state">${Dataaa.current.condition.text}</p>
                            <div class="d-flex flex-row justify-content-between align-items-center w-100">
                                <div class="d-flex justify-content-center align-items-baseline ">
                                    <i class="fa-solid fa-umbrella  card-icons me-1"></i>
                                    <p class="card-text">20%</p>
                                </div>
                                <div class="d-flex justify-content-center align-items-baseline">
                                    <i class="fa-solid fa-umbrella  card-icons me-1"></i>
                                    <p class="card-text">18 KM/h</p>
                                </div>
                                <div class="d-flex justify-content-center align-items-baseline">
                                    <i class="fa-solid fa-umbrella  card-icons me-1"></i>
                                    <p class="card-text">East</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    mydate = new Date(`${Dataaa.forecast.forecastday[1].date}`)
    card2.innerHTML = `<div class="inner">
                    <div class="card">
                        <div class="card-header d-flex justify-content-center align-items-center">
                            <p>${daysOfWeek[mydate.getDay()]}</p>
                        </div>
                        <div class="card-body  d-flex flex-column justify-content-center align-items-center">
                            <img src="${Dataaa.forecast.forecastday[1].day.condition.icon}" alt="" class="card-2-icon">
                            <div class="mb-5"> 
                                <p class="card-2-temp">${Dataaa.forecast.forecastday[1].day.maxtemp_c}&#8451;</p>
                                <p class="card-2-humidity">${Dataaa.forecast.forecastday[1].day.mintemp_c}&#8451;</p>
                            </div>
                            <p class="card-2-state">${Dataaa.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                    </div>
                </div>`
    mydate = new Date(`${Dataaa.forecast.forecastday[2].date}`)
    card3.innerHTML = `<div class="inner">
                                <div class="card">
                                    <div class="card-header d-flex justify-content-center align-items-center">
                                        <p>${daysOfWeek[mydate.getDay()]}</p>
                                    </div>
                                    <div class="card-body  d-flex flex-column justify-content-center align-items-center">
                                        <img src="${Dataaa.forecast.forecastday[2].day.condition.icon}" alt="" class="card-2-icon">
                                        <div class="mb-5"> 
                                            <p class="card-2-temp">${Dataaa.forecast.forecastday[2].day.maxtemp_c}&#8451;</p>
                                            <p class="card-2-humidity">${Dataaa.forecast.forecastday[2].day.mintemp_c}&#8451;</p>
                                        </div>
                                        <p class="card-2-state">${Dataaa.forecast.forecastday[2].day.condition.text}</p>
                                    </div>
                                </div>
                            </div>`
}

gettingDataCairo()
