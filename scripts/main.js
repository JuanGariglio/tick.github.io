let tickImage = document.querySelector('img');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let ol = document.querySelector('ol');

tickImage.onclick = function() {
  let tickSrc = tickImage.getAttribute('src');

  if(tickSrc === 'images/tick.png') {
    tickImage.setAttribute ('src','images/dark-tick.png');
    body.style.backgroundColor = "#0A0A0A";
    html.style.backgroundColor = "#00B79F";
    h1.style.color = "#C8C8C8";
    p.style.color = "#C8C8C8";
    ol.style.color = "#C8C8C8";
  } else {
    tickImage.setAttribute ('src','images/tick.png');
    body.style.backgroundColor = "rgb(214, 214, 214)";
    html.style.backgroundColor = "#7CCF4E";
    h1.style.color ="#000000";
    p.style.color = "#000000";
    ol.style.color = "#000000";
  }
}

let myButton = document.getElementById('name-changer');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '¡Bienvenido, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '¡Bienvenido, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}