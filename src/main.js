const secH = document.querySelector(".second-hand");
const minH = document.querySelector(".min-hand");
const hourH = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  
  
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  
   console.log(`Time: ${hours}:${minutes}:${seconds}`);
  

  const secDeg = (seconds * 6) + 90;
  
 
  const minDeg = (minutes * 6) + (seconds * 0.1) + 90;
  
 
  const hourDeg = (hours % 12 * 30) + (minutes * 0.5) + 90;
  
  console.log(`Angles - Seconds: ${secDeg}, Minutes: ${minDeg}, Hours: ${hourDeg}`);
 
  secH.style.transform = `rotate(${secDeg}deg) `;
  minH.style.transform = `rotate(${minDeg}deg) `;
  hourH.style.transform = `rotate(${hourDeg}deg) `;
  
 
  if (seconds === 0) {
    secH.style.transition = 'none';
  } else {
    secH.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
}


setDate();


setInterval(setDate, 1000);