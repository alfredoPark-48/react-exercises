import React from "react";
import "./styles.css";
import Info from "./components/Info";

const App = () => {
	const user = {
		name: "Chris on Code",
		location: "Las Vegas",
		foodType: "Everything",
		age: 28,
		likes: "Coding into the wee hours of the morning",
		twitterUsername: "chrisoncode",
		avatar:
			"https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png",
	};

	return (
		<div className="user-deets">
			<img src={user.avatar} />
			<h3>
				<a>{user.name}</a>
			</h3>
			<Info title="Location" text={user.location} />
			<Info title="Eats" text={user.foodType} />
			<Info title="Age" text={user.age} />
			<Info title="Likes" text={user.likes} />
			<Info title="Twitter" text={`@${user.twitterUsername}`} anchor="a" />
		</div>
	);
};

export default App;
