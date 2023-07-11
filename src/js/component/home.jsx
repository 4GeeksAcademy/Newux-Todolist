import React from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import { StickyNote } from "./Stickynote"
//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1 className="header">todos</h1>
			<StickyNote />
		</div>
	);
};

export default Home;
