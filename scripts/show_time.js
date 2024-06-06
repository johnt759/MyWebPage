function getDateAndTime() {
const d = new Date();
let year = d.getFullYear();
let month = d.getMonth()+1; // Don't forget to add 1 to the month.
let date = d.getDate();
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
// Make sure to append a 0 before the minute or second if either current value is less than 10.
if (minute < 10)
{
	minute = "0" + minute;
}
if (second < 10)
{
	second = "0" + second;
}
var this_time = hour + ":" + minute + ":" + second;
var this_date = month + "/" + date + "/" + year;
var recent_visited = this_time + " " + this_date;

document.getElementById("last_visited").innerHTML = recent_visited;
setTimeout("getDateAndTime()", 1000);
}
getDateAndTime();