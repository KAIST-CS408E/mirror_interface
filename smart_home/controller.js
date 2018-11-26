
//bathroom - 0, kitchen - 1, living room - 2, bedroom - 3
var rooms = ['Bathroom', 'Kitchen', 'Living Room', 'Bedroom'];
var temps = [23, 25, 21, 19]
var brightness = [27, 74, 52, 43]
var states = [true, false, false, true]

var current_room = 0;


function minus_temp() {
	temps[current_room]--;
	document.getElementById('temp_measurement').innerHTML = temps[current_room] + "°C";
}

function plus_temp() {
	temps[current_room]++;
	document.getElementById('temp_measurement').innerHTML = temps[current_room] + "°C";
}

function minus_brightness() {
	brightness[current_room]--;
	document.getElementById('brightness_measurement').innerHTML = brightness[current_room] + "%";
}

function plus_brightness() {
	brightness[current_room]++;
	document.getElementById('brightness_measurement').innerHTML = brightness[current_room] + "%";
}



function switch_light() {
	var isChecked = document.getElementById('bulb_checkbox').checked;
	var lightbulb = document.getElementById('bulb');

	if (isChecked)
	{
		lightbulb.style.color = 'yellow';
	}
	else
	{
		lightbulb.style.color = 'white';
	}
}


function open_close_vertical_door() {
	event.stopPropagation();

	var door = document.getElementById(arguments[0]);

	if (door.style.transform != "rotate(0deg)")
	{
		door.style.transform = "rotate(0deg)";
		door.style.bottom = "0px";
		door.style.left = "45px";
	}
	else
	{
		door.style.transform = "rotate(-120deg)";
		door.style.bottom = "-69px";
		door.style.left = "2px";
	}
}

function open_close_horizontal_door() {
	event.stopPropagation();
	var door = document.getElementById(arguments[0]);

	if (door.style.transform != "rotate(0deg)")
	{
		door.style.transform = "rotate(0deg)";
		door.style.bottom = "45px";
		door.style.left = "0px";
	}
	else
	{
		door.style.left = "-69px";
		door.style.transform = "rotate(120deg)";
		door.style.bottom = "2px";
	}
}

function CloseSettings() {
	var settings = document.getElementById("settings");
	settings.style.display = "none";
}

function ShowSettings() {
	var settings = document.getElementById("settings");

	current_room = arguments[0];

	document.getElementById("settings_room").innerHTML = rooms[current_room];
	document.getElementById("temp_measurement").innerHTML = temps[current_room] + "°C";
	document.getElementById("brightness_measurement").innerHTML = brightness[current_room] + "%";

	settings.style.display = "block";

	


}