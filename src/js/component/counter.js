import React from "react";
import PropTypes from "prop-types";

const Counter = props => {
	return <h2>{props.text}</h2>;
};

Counter.propTypes = {
	text: PropTypes.string
};

export default Counter;
