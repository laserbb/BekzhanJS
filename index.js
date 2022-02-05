const date = new Date();
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = week[date.getDay()];
const year = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "October", "November", "December"];
var month = year[date.getMonth()];

function multiply() {
	first = document.getElementById("first").value;
	second = document.getElementById("second").value;
	document.getElementById("result").innerHTML = "The result is: " + (first * second);
}

function divide() {
	first = document.getElementById("first").value;
	second = document.getElementById("second").value;
	document.getElementById("result").innerHTML = "The result is: " + (first / second);
}

document.getElementById("name").innerHTML="Bekzhan Seitov CS-2119";
document.getElementById("year").innerHTML="Year: " + date.getFullYear();
document.getElementById("day").innerHTML="Today is: " + day;
document.getElementById("date").innerHTML="Date: " + date.getDate();
document.getElementById("month").innerHTML="Month: " + month;
document.getElementById("time").innerHTML="Current time is: " + date.toLocaleTimeString();