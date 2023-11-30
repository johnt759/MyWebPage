const d = new Date();
let year = d.getFullYear();
let month = d.getMonth()+1; // Don't forget to add 1 to the month.
let date = d.getDate();
let hour = d.getHours();
let minute = d.getMinutes();
// Make sure to append a 0 before the minute if the current minute is less than 10.
if (minute < 10)
{
	var this_time = hour + ":" + "0" + minute;
}
else {
	var this_time = hour + ":" + minute;
}
var this_date = month + "/" + date + "/" + year;
var recent_visited = this_time + " " + this_date;

document.getElementById("last_visited").innerHTML = recent_visited;