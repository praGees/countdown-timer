const newYear = '1 Jan 2021';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecond = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minutes = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;
  


    function formatZero(time){
            return time < 10 ? (`0${time}`) : time;

    };
    
    daysEl.innerHTML = formatZero(days);
    hoursEl.innerHTML = formatZero(hours);
    minutesEl.innerHTML = formatZero(minutes);
    secondsEl.innerHTML = formatZero(seconds);

}

countdown();
setInterval(countdown,1000);