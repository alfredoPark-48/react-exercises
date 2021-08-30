import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
	const [text, setText] = useState("");

	if (text.toLowerCase() === "open sesame") {
		alert("You may pass!");
	}

	return (
		<div className="App">
			<h2>What's the secret phrase?</h2>

			<input
				type="text"
				placeholder="Super duper secret"
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>

			<p>
				Hint: It's <strong>open sesame</strong>
			</p>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
