//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let count = 0;
let number;
let seconds;
let minutes;
let hours;

setInterval(function() {
	ReactDOM.render(
		<Home n0={seconds} n00={minutes} n000={hours} />,
		document.querySelector("#app")
	);
	count++;

	number = count.toString();
	seconds = number[0];
	if (number.length === 2) {
		seconds = number[1];
		minutes = number[0];
	} else if (number.length === 3) {
		seconds = number[2];
		minutes = number[1];
		hours = number[0];
	}
}, 1000);
