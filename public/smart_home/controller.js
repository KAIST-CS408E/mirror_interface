//bathroom - 0, kitchen - 1, living room - 2, bedroom - 3
var rooms = ['Bathroom', 'Kitchen', 'Living Room', 'Bedroom'];
var temps = [23, 25, 21, 19]
var brightness = [20, 70, 50, 40]
var states = [false, false, false, true]

var bulb_state = false;
var current_room = 0;
// var bulb_color = [0, 255, 0]

const max_temp = 26;
const min_temp = 0;

function rgb_to_hex() { 
  var hex = Number(arguments[0]).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};



function minus_temp() {
	temps[current_room]--;

	if (temps[current_room] < min_temp)
		temps[current_room] = min_temp;

	document.getElementById('temp_measurement').innerHTML = temps[current_room] + "°C";
	update_light(false);
}

function plus_temp() {
	temps[current_room]++;

	if (temps[current_room] > max_temp)
		temps[current_room] = max_temp;

	document.getElementById('temp_measurement').innerHTML = temps[current_room] + "°C";
	update_light(false);
}

function minus_brightness() {
	brightness[current_room] -= 10;

	if (brightness[current_room] < 0)
		brightness[current_room] = 0;


	document.getElementById('brightness_measurement').innerHTML = brightness[current_room] + "%";
  update_light(false);
}

function plus_brightness() {
	brightness[current_room] += 10;

	if (brightness[current_room] > 100)
		brightness[current_room] = 100;


	document.getElementById('brightness_measurement').innerHTML = brightness[current_room] + "%";
  update_light(false);
}

function update_light() {
	var bright = brightness[current_room];

	if (bright === 0)
		bright = 1;

	var color1 = 170 + Math.floor(85 * (brightness[current_room] / 100)); 
  color1 = rgb_to_hex(color1);

  var color2 = temps[current_room] * 10;

  if (temps[current_room] === max_temp)
  	color2 = 255;



  var argset = "brightness=b 1 " + bright + "&";

  var toggle = "toggle=" + arguments[0] + "&";

  var color = "color=c 2 " + color2 + " 0 " + (255 - color2);

  console.log(color) 

  $.ajax({
      type : "POST",
      crossDomain : false,
      url: "http://127.0.0.1:5000/ChangeLight?" + argset + toggle + color,
      success: function(data) {
          // alert("");
      }
  });



  
  var thermometer = document.getElementById('thermometer');
  thermometer.style.color = "#" + rgb_to_hex(color2) + "00" + rgb_to_hex(255 - color2);


	var isChecked = document.getElementById('bulb_checkbox').checked;
	var lightbulb = document.getElementById('bulb');
	var slider = document.getElementById('slider');

	if (isChecked)
	{
    lightbulb.style.color = "#" + "00" + color1 + "00";
    slider.style.backgroundColor = "#" + "00" + color1 + "00";
    states[current_room] = true;
  	bulb_state = true;
  }
  else
  {
  	lightbulb.style.color = 'white';
  	slider.style.backgroundColor = 'white';
    states[current_room] = false;
    bulb_state = false;
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

	console.log("show settings");

	current_room = arguments[0];

	var toggle = !(bulb_state === states[current_room]);

	document.getElementById("settings_room").innerHTML = rooms[current_room];
	document.getElementById("temp_measurement").innerHTML = temps[current_room] + "°C";
	document.getElementById("brightness_measurement").innerHTML = brightness[current_room] + "%";
  document.getElementById("bulb_checkbox").checked = states[current_room];

  update_light(toggle);

	settings.style.display = "block";
    


}














// THE TITLE AND TIME
      var idx_to_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      var idx_to_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

      function loadTimeDate() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        
        m = checkTime(m);
        hour = get_ampm_hour(h);
        day_part = "AM";
        if (h >= 12) {
          day_part = "PM";
        }
        var hello_message = get_hello_message(h);

        document.getElementById('display_time').innerHTML = hour + ":" + m + "   " + day_part;
        var d = today.getDate();
        var day = idx_to_day[today.getDay()];
        var month = idx_to_month[today.getMonth()];
        document.getElementById('display_date').innerHTML = day + ", " + month + " " + d  ;
        document.getElementById('hello_message').innerHTML = hello_message;
        var t = setTimeout(loadTimeDate, 500);
      }

      function get_ampm_hour(h) {
        if (h == 0 || h == 12) {
          return 12
        }
        return h%12
      }

      function get_hello_message(h) {
        if (h <= 4 && h >= 22) {
          return "Good Night!"
        }
        
        if (h > 4 && h <= 11) {
          return "Good Morning!"
        }
        
        if (h > 11 && h < 16) {
          return "Good Afternoon!"
        }
        return "Good Evening!"
      }

      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      } 

      window.onload = function() {
        loadTimeDate();
      };

