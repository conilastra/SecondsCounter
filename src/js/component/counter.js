import React from "react";
import PropTypes from "prop-types";

const Counter = props => {
	return (
		<div className="rounded bg-dark mx-1 p-2 text-white display-3">
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
