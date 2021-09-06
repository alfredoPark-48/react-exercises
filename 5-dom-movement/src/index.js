import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
	const [pixels, setPixels] = useState(300);

	return (
		<div className="App">
			<h1>Move the Box!</h1>

			{/* handle the click event on this button */}
			<button
				onClick={() => {
					setPixels(pixels - 50);
				}}
			>
				👆 Move Up 👆
			</button>

			{/* move this box using inline styles */}
			<div className="box" style={{ transform: `translateY(${pixels}px)` }} />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
