import React from "react";
import "../styles.css";

const Info = ({ title, text, anchor }) => {
	if (anchor === "a") {
		return (
			<div className="user-deets">
				<p>
					<strong>{title}</strong>
					<a>{text}</a>
				</p>
			</div>
		);
	} else {
		return (
			<div className="user-deets">
				<p>
					<strong>{title}</strong> {text}
				</p>
			</div>
		);
	}
};

export default Info;
