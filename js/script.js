const second_hand = document.querySelector('.sec-hand');
const min_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');

//Audio Elements.
let tick = document.querySelector('#tick');
let crims = document.querySelector('#crims');

function setDate() {
  const date = new Date();

  //Transition of seconds hand.
  const seconds = date.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90; 

  second_hand.style.transform = `rotate(${secondsDegree}deg)`;

  //Transiton of minutes hand.
  const min = date.getMinutes();
  const minDegree = ((min / 60) * 360) + 90;
  min_hand.style.transform = `rotate(${minDegree}deg)`;
  tick.play();

  //Transiton of minutes hand.
  const hours = date.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90;
  hour_hand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000);