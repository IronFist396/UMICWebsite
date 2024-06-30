VANTA.NET({
    el: "#home",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3991e0
  })

var i = 0;
var j = 0;
var txt = 'Welcome to UMIC'; 
var txt2 = 'IIT Bombay'
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
    document.querySelector(".type-effect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
else{
    if (j < txt2.length) {
        document.querySelector(".type-effect-2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
    } 
}
}

typeWriter()

document.querySelector('#contactus p').innerHTML = `© Copyright ${new Date().getFullYear()}, UMIC IITB`

var btn1 = document.querySelector('.aerove');
btn1.addEventListener("mouseover", () => {
    btn1.style.backgroundColor = "hsl(0, 0%, 70%)";
    btn1.innerHTML = "Team AeRoVe";
})

btn1.addEventListener("mouseout", () => {
    btn1.style.backgroundColor = "hsl(0, 0%, 95%)";
    btn1.innerHTML = "Know More";
})

var btn2 = document.querySelector('.sedrica');
btn2.addEventListener("mouseover", () => {
    btn2.style.backgroundColor = "hsl(0, 0%, 70%)";
    btn2.innerHTML = "Team SeDrIcA";
})

btn2.addEventListener("mouseout", () => {
    btn2.style.backgroundColor = "hsl(0, 0%, 95%)";
    btn2.innerHTML = "Know More";
})