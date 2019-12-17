// init sidenavb
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});

const formWeather = document.getElementById('formWeather');
const inputLocation = document.getElementById('location');

formWeatherCity.addEventListener('submit', e => {
    e.preventDefault();
    const inputLocation = e.target.location;
    
    if(!inputLocation.value.length)
        return inputLocation.classList.toggle('invalid');

    let buttonSubmit = e.target.getElementsByTagName('button')[0];

    buttonSubmit.classList.toggle('disabled');
    buttonSubmit.innerHTML = '<i class="small material-icons left">autorenew</i> wait';

    fetch(`/api/weather?q=${inputLocation.value}`)
    .then(res => {
        buttonSubmit.classList.toggle('disabled');
        buttonSubmit.innerHTML = '<i class="material-icons left">search</i> search';
        return res.text();
    })
    .then(html => document.getElementById('forecast').innerHTML = html)

});
