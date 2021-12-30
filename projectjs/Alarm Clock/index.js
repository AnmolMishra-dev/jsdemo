console.log("This Alarm");
const alarmSubmit = document.getElementById('alarmSubmit');
var toastLiveExample = document.getElementById('liveToast');
document.body.style.backgroundColor = "yellow";
// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://www.soundjay.com/phone/sounds/telephone-ring-01a.mp3');

// function to play the alarm ring tone
function ringBell() {
     audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            document.body.style.backgroundColor = "red";
            var toast = new bootstrap.Toast(toastLiveExample)

            toast.show('autohide');
          
            ringBell();
        }, timeToAlarm);
    }
}

