const clock = document.querySelector('#clock')

const currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
const seconds = String(currentTime.getSeconds()).padStart(2, '0');
const ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12 || 12; 
clock.innerHTML =  `${hours}:${minutes}:${seconds} ${ampm}`;

