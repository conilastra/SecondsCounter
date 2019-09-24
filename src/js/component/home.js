import React from "react";
import PropTypes from "prop-types";
import Counter from "./counter";

export const Home = props => {
	return (
		<div className="d-flex align-items-center justify-content-center">
			<Counter content={props.hour} />
			<Counter content={props.hour} />
			<Counter content={props.minute} />
			<Counter content={props.second} />
		</div>
	);
};

Home.propTypes = {
	hour: PropTypes.hour,
	minute: PropTypes.string,
	second: PropTypes.string
};

Home.defaultProps = {
	hour: "0",
	second: "0",
	minute: "0"
};
