let hr = document.getElementById("h");
let min = document.getElementById("m");
let sec = document.getElementById("s");
function displaytime(){
    let date = new Date();
    // GET HOURS,MINUTES,SECONDS
    let hours = date.getHours();
    let Minutes  = date.getMinutes();
    let seconds  = date.getSeconds();
    // ROTATION
    let hRotate = 30*hours + (Minutes/2);
    let mRotate = 6*Minutes;
    let sRotate = 6*seconds;

    hr.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;
}
setInterval(displaytime,1000);