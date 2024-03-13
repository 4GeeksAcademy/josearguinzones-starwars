import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://w7.pngwing.com/pngs/723/1016/png-transparent-star-wars-logo-star-wars-text-logo-silhouette.png"
						width={"60px"}
						height={"45px"}
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="nav-item dropdown">
					<a className="nav-link dropdown-toggle"
						href="#" role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false" >
						Favoritos</a>
					<ul className="dropdown-menu" >
						{store.favoritos.map((item, id) => (
							<li key={id}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
