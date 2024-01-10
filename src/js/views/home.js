import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";

export const Home = () => (
	<div className="text-center mt-5">
		<Personajes />
		<br />
		<Planetas />
	</div>
);
