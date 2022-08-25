
const time = document.querySelector('.watch .time');
const  start = document.getElementById('start')
const stope = document.getElementById('stope')
const reset = document.getElementById('reset')
 let seconds = 0;
let interval = null;
function digital () {
    seconds++
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;

    if(mins < 10) mins = "0" + mins;
    
    if(hrs < 10) hrs = "0" + hrs;

    time.innerText = `${hrs}:${mins}:${secs}`;
}

start.addEventListener('click',()=>{
    if(!interval){
          interval =  setInterval(digital, 1000)
    }
})

stope.addEventListener('click',() => {
    clearInterval(interval)
    interval = null
})

reset.addEventListener('click',() => {
    seconds = 0
    time.innerText = '00:00:00'
})

