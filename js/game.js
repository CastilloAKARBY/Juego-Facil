const width = 400;
const heigh = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigh)
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;

$map.addEventListener("click", function (e) {
    clicks++;
    let distance = getDistance(e, target);
    let distancehint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distancehint}</h1>`
    
    if (distance < 20) {
        alert(`Encontraste el tesoro en ${clicks} clicks!`);
        location.reload();
    }
})