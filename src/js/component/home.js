import React from "react";
import PropTypes from "prop-types";

export const Home = props => {
	let text;
	if (props.counter < 10) {
		text = props.counter;
	} else {
		text = 0;
	}
	return <h1>{text}</h1>;
};

Home.propTypes = {
	counter: PropTypes.number
};
