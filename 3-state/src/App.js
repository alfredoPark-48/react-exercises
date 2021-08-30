import React, { useState } from "react";
import "./styles.css";

const App = () => {
	const [text, setText] = useState("");
	const [age, setAge] = useState("");

	return (
		<div className="App">
			<div>
				<h2 className="subtitle is-4">Update Data from an input</h2>
			</div>

			{/* Display Data */}
			<div className="input-display">
				<p>Display Name: {text}</p>
				<p>Display Age: {age}</p>
			</div>

			{/* Collect User Inputs */}
			<div className="inputs">
				{/* Input name */}
				<div className="field">
					<label className="label">Name: </label>
					<input
						className="input"
						type="text"
						placeholder="William"
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
				</div>

				{/* Input age */}
				<div className="field">
					<label className="label">Age: </label>
					<input
						className="input"
						type="number"
						placeholder="38"
						onChange={(e) => {
							setAge(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
