import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Personajes = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])
    return (
        <div className="container">
            <h1>Personajes</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.personajes.map((item, id) => (


                        <div className="card" key={id} style={{ width: "18rem", flex: "none", margin: "10px" }}>
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">gender: {item.gender}</p>
                                <p className="card-text">birthay: {item.birth_year}</p>

                                <Link to={"/single/" + (id + 1)} className="btn btn-primary float-start">learn more</Link>
                                <button className="btn btn-outline-danger float-end" onClick={()=>actions.agregarFavoritos(item.name)}>
                                    <i className="fa fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
