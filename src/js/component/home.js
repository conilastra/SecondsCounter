import React from "react";
import PropTypes from "prop-types";
import Counter from "./counter";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = props => {
	return (
		<div className="d-flex container-fluid align-middle justify-content-center flex-nowrap">
			<div className="row my-5">
				<div
					className="col-2 rounded-lg bg-dark mx-1 py-4 text-white text-center display-3"
					style={{ width: "2em" }}>
					<FontAwesomeIcon icon={faClock} />
				</div>
				<Counter content={props.n000000} />
				<Counter content={props.n00000} />
				<Counter content={props.n0000} />
				<Counter content={props.n000} />
				<Counter content={props.n00} />
				<Counter content={props.n0} />
			</div>
		</div>
	);
};

Home.propTypes = {
	n0: PropTypes.hour,
	n00: PropTypes.string,
	n000: PropTypes.string,
	n0000: PropTypes.hour,
	n00000: PropTypes.string,
	n000000: PropTypes.string
};

Home.defaultProps = {
	n0: "0",
	n00: "0",
	n000: "0",
	n0000: "0",
	n00000: "0",
	n000000: "0"
};
