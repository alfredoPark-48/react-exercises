import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState(0);

	return (
		<div className="App">
			<h1>Adding Two Numbers</h1>

			<div className="number-inputs">
				<input
					type="number"
					placeholder="0"
					onChange={(e) => {
						setNumber1(Number(e.target.value));
					}}
				/>
				<input
					type="number"
					placeholder="0"
					onChange={(e) => {
						setNumber2(Number(e.target.value));
					}}
				/>
			</div>

			<button
				onClick={() => {
					setResult(number1 + number2);
				}}
			>
				Add Them!
			</button>

			<h2>{result}</h2>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
