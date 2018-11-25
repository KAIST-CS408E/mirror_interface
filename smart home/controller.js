function minus_temp() {
	var txt = document.getElementById(arguments[0]);
	var temp = txt.innerHTML;
	var number = temp.substring(0, 2);
	number--;
	txt.innerHTML = number + "°C";
}

function plus_temp() {
	var txt = document.getElementById(arguments[0]);
	var temp = txt.innerHTML;
	var number = temp.substring(0, 2);
	number++;
	txt.innerHTML = number + "°C";
}


function minus_humidity() {
	var txt = document.getElementById(arguments[0]);
	var temp = txt.innerHTML;
	var number = temp.substring(0, 2);
	number--;
	txt.innerHTML = number + "%";
}


function plus_humidity() {
	var txt = document.getElementById(arguments[0]);
	var temp = txt.innerHTML;
	var number = temp.substring(0, 2);
	number++;
	txt.innerHTML = number + "%";
}

function switch_light() {
	var isChecked = document.getElementById(arguments[1]).checked;
	var lightbulb = document.getElementById(arguments[0]);

	if (isChecked)
	{
		lightbulb.style.color = 'yellow';
	}
	else
	{
		lightbulb.style.color = 'black';
	}
}

function open_close_door() {
	var door = document.getElementById(arguments[0]);
	// alert(door.value);
	if (door.style.transform != "rotate(0deg)")
	{
		door.style.transform = "rotate(0deg)";
		door.style.left = "0px";
	}
	else
	{
		door.style.transform = "rotate(15deg)";
		door.style.left = "-13px";
	}
}


// function getClickPosition(e) {
// 	var bathroom = document.getElementById("bathroom");
//   var xPosition = e.clientX;
//   var yPosition = e.clientY;
//   // alert(bathroom.style.borderBottomWidth);
//   // alert(bathroom.childNodes[0]);
//   if (bathroom.childNodes.length <= 1) {
// 	  var div = document.createElement("div");
// 	  div.style.borderWidth = "5px";
// 		div.style.borderColor = "black";
// 		div.style.borderStyle = "solid";
// 		div.style.borderRadius = "10px";
// 	  div.style.position = "absolute";
// 	  div.style.left = xPosition + "px";
// 	  div.style.top = yPosition + "px";
// 		div.style.width = "200px";
// 		div.style.height = "140px";
// 		div.style.backgroundColor = "white";
// 		div.style.zIndex = "1";
		

// 		var heat = document.createElement("div");
// 		heat.style.position = "absolute";
// 	  heat.style.left = 15 + "px";
// 	  heat.style.top = 15 + "px";
// 	  // heat.style.backgroundColor = "red";
// 	  heat.innerHTML = "Heat";
// 	  heat.style.fontSize = fontSize;
// 	  heat.style.fontFamily = fontFamily;

// 	  var heat_minus = document.createElement("button");
// 	  heat_minus.style.position = "absolute";
// 	  heat_minus.style.left = "53px";
// 	  heat_minus.style.borderWidth = "2px";
// 		heat_minus.style.borderColor = "black";
// 		heat_minus.style.borderStyle = "solid";
// 	  // heat_minus.style.top = "2px";


// 	  heat_minus.style.width = "24px";
// 	  heat_minus.style.height = "24px";
// 	  heat_minus.style.borderRadius = "12px";
// 	  heat_minus.style.backgroundColor = "white";
// 	  heat_minus.innerHTML = "-";
// 	  heat_minus.style.fontSize = "50px";
// 	  heat_minus.style.textAlign = "top";

// 	  heat.appendChild(heat_minus);

// 	  div.appendChild(heat);


// 		bathroom.appendChild(div);
// 	}
// 	else {
// 		bathroom.removeChild(bathroom.childNodes[1]);
// 	}
	


// }