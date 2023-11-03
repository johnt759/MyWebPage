const d = new Date();
let year = d.getFullYear();
let month = d.getMonth()+1; // Don't forget to add 1 to the month.
let date = d.getDate();
let hour = d.getHours();
let minute = d.getMinutes();
let this_time = hour + ":" + minute;
let this_date = month + "/" + date + "/" + year;
let recent_visited = this_time + " " + this_date;

document.getElementById("last_visited").innerHTML = recent_visited;