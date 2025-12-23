const secH = document.querySelector(".second-hand");
const minH = document.querySelector(".min-hand");
const hourH = document.querySelector(".hour-hand");
console.log(secH);
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secDeg = (seconds / 60) * 360 - 90;
  secH.style.transform = `rotate(${secDeg}deg)`;
  const min = now.getMinutes();
  const minDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minH.style.transform = `rotate(${minDeg}deg)`;
  const hour = now.getHours();
  const hourDeg = ((hours % 12 / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourH.style.transform = `rotate(${hourDeg}deg)`;
  console.log(seconds);
}
setInterval(setDate, 1000);
