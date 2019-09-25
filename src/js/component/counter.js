import React from "react";
import PropTypes from "prop-types";

const Counter = props => {
	return (
		<div
			className="col rounded-lg bg-dark mx-1 py-4 text-white text-center display-3"
			style={{ width: "1.2em" }}>
			{props.content}
		</div>
	);
};

Counter.propTypes = {
	content: PropTypes.string
};

Counter.defaultProps = {
	content: "0"
};

export default Counter;
