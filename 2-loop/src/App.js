import React from "react";
import users from "./users-data";
import "./styles.css";

const App = () => {
	return (
		<div className="App">
			<div className="page-deets">
				<h2>Loop Over an Array of Data</h2>
			</div>

			{/* Iterate over imported array in userData */}
			{users.map((user) => {
				return (
					<div className="users">
						<div>
							<h2>{user.name}</h2>
							<p>{user.location}</p>
							<p>{user.car}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default App;
