
function UpdateTime() {
    let now = new Date();
    function formatTime(number) {
        return number < 10 ? '0' + number : number
    }


    let hours = formatTime(now.getUTCHours());
    let minutes = formatTime(now.getUTCMinutes());
    let seconds = formatTime(now.getUTCSeconds());
    let numericHours = now.getHours();
    let numericMinutes = now.getMinutes();
    let numericSeconds = now.getSeconds();

    let componentHours = document.getElementById('circle__hours__p');
    componentHours.innerHTML = hours;
    let elementHours = document.getElementById('circle__hours');
    elementHours.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 89%, transparent 89% 100%), conic-gradient(rgb(255, 62, 62) ${numericHours / 24 * 100}%, rgba(252, 165, 165, 0.52) 0%)`;

    let componentMinutes = document.getElementById('circle__minutes__p');
    componentMinutes.innerHTML = minutes;
    let elementMiunutes = document.getElementById('circle__minutes');
    elementMiunutes.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 89%, transparent 89% 100% ), conic-gradient(rgb(253, 244, 69) ${numericMinutes / 60 * 100}%, rgba(255, 250, 154,0.52) 0%)`;

    let componentSeconds = document.getElementById('circle__seconds__p');
    componentSeconds.innerHTML = seconds;
    let elementSeconds = document.getElementById('circle__seconds');
    elementSeconds.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 89%, transparent 89% 100% ), conic-gradient(rgb(44, 125, 255) ${numericSeconds / 60 * 100}%, rgba(144, 185, 249,0.52) 0%)`;
}

function UpdateTimeChristmas() {
    let now = new Date(); 
    let currentYear=now.getFullYear();
    let christmasDate=new Date(`December 25, ${currentYear} 00:00:00`)
    if(now>christmasDate){
        christmasDate=new Date(`December 25, ${currentYear+1} 00:00:00`)
    }
    function formatTime(number) {
        return number < 10 ? '0' + number : number
    }
    let timeDifference= christmasDate-now;
    let days = formatTime(Math.floor(timeDifference / (1000 * 60 * 60 * 24))); 
    let hours = formatTime(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))); 
    let minutes = formatTime(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
    let numericDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
    let numericHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let numericMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    
    let componentSeconds = document.getElementById('circle__days__christmas__p');
    componentSeconds.innerHTML = days;
    let elementSeconds = document.getElementById('circle__days__christmas');
    elementSeconds.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 89%, transparent 89% 100% ), conic-gradient(rgb(44, 125, 255) ${(1-(numericDays / 365)) * 100}%, rgba(144, 185, 249,0.52) 0%)`;

    let componentHours = document.getElementById('circle__hours__christmas__p');
    componentHours.innerHTML = hours;
    let elementHours = document.getElementById('circle__hours__christmas');
    elementHours.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 89%, transparent 89% 100%), conic-gradient(rgb(255, 62, 62) ${numericHours / 24 * 100}%, rgba(252, 165, 165, 0.52) 0%)`;

    let componentMinutes = document.getElementById('circle__minutes__christmas__p');
    componentMinutes.innerHTML = minutes;
    let elementMiunutes = document.getElementById('circle__minutes__christmas');
    elementMiunutes.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 89%, transparent 89% 100% ), conic-gradient(rgb(253, 244, 69) ${numericMinutes / 60 * 100}%, rgba(255, 250, 154,0.52) 0%)`;
}

setInterval(UpdateTime, 1000);
setInterval(UpdateTimeChristmas, 1000);