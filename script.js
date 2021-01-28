const days_e = document.getElementById("days");
const hours_e = document.getElementById("hours");
const mins_e = document.getElementById("mins");
const seconds_e = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    console.log(days, hours, mins, seconds);

    days_e.innerHTML = days;
    hours_e.innerHTML = formatTime(hours);
    mins_e.innerHTML = formatTime(mins);
    seconds_e.innerHTML = formatTime(seconds);

}

function percentagePassed() {
    //const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    daysPassed = 365 - days.innerHTML;
    console.log("daysPasses:", days, daysPassed  );
    const percentagePassed = Math.floor((daysPassed / 365) * 100);
   // percentagePassed = Math.floor(100 - percentageRemaining);
    console.log(percentagePassed);

    const percentage_e = document.getElementById("percentage");
    percentage_e.style.width = percentagePassed + "%";

    const percentage_text_e = document.getElementById("percentage_text");
    percentage_text_e.innerHTML = " year progress  " + percentagePassed + "%" ;

    const currentDate_e = document.getElementById("current-date");
    month = currentDate.getMonth() + 1;
    currentDate_e.innerHTML = formatTime(currentDate.getDate()) + " / " + formatTime(month) + " / " + currentDate.getFullYear();

    console.log(currentDate);
    console.log(percentage_e.style.width);


    var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = daysName[currentDate.getDay()];
    const weekDay_e = document.getElementById("week-day");
    weekDay_e.innerHTML = "_"+dayName;
    console.log(dayName);

    document.getElementById("current-time").innerHTML = formatTime(currentDate.getHours()) + " : " + formatTime(currentDate.getMinutes()) + " : " + formatTime(currentDate.getSeconds());
    console.log("current Time : ",currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds());
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);
setInterval(percentagePassed, 1000);