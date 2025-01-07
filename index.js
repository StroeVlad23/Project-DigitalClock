
function UpdateTime() {
    let now = new Date();
    function formatTime(number) {
        return number < 10 ? '0' + number : number
    }

    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    let seconds = formatTime(now.getSeconds());
    numericHours= now.getHours()
    numericMinutes= now.getMinutes()
    numericSeconds= now.getSeconds()
    let componentHours= document.getElementById('circle__red__p');
    componentHours.innerHTML=hours;
    let elementRed=document.getElementById('circle__red');
    elementRed.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 85%, transparent 86% 100%), conic-gradient(rgb(255, 62, 62) ${numericHours/24*100}%, rgb(252, 165, 165) 0%)`;
    
    let componentMinutes= document.getElementById('circle__yellow__p');
    componentMinutes.innerHTML=minutes;
    let elementYellow=document.getElementById('circle__yellow');
    elementYellow.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 85%, transparent 86% 100% ), conic-gradient(rgb(253, 244, 69) ${numericMinutes/60*100}%, rgb(255, 250, 154) 0%)`;
   
    let componentSeconds= document.getElementById('circle__blue__p');
    componentSeconds.innerHTML=seconds;
    let elementBlue=document.getElementById('circle__blue');
    elementBlue.style.background = `radial-gradient(closest-side, rgb(77, 77, 77) 85%, transparent 86% 100% ), conic-gradient(rgb(44, 125, 255) ${numericSeconds/60*100}%, rgb(144, 185, 249) 0%)`;

}

setInterval(UpdateTime,1000);