
function startClock(){

//Save the times in variables

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();


	if (hours >= 12){
	  time = " PM";
	}
	else {
	  time  = " AM";
	}

//convert hours to 12-hour format:
	if (hours>12){
//need to subtract 12 to convert from military time.
		hours = hours - 12;
	}
	else if (hours === 0){
		hours = 12;	
	}
	// else {
	// 	alert("Clock is not running properly!");
	// }

//Put 0 in front of (single digit) minutes:
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	else {
		minutes = minutes;
	}

//Put 0 in front of (single digit) seconds:
	if (seconds < 10){
		seconds = "0" + seconds;
	}
	else {
		seconds = seconds;
	}

document.getElementById("digital").innerHTML = (hours + ":" + minutes + ":" + seconds + time);

}

setInterval('startClock()', 1000);

