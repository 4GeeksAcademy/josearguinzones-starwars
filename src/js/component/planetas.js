import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Planetas = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerPlanetas()
    }, [])
    return (
        <div className="container">
            <h1>Planetas</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.planetas.map((item, id) => (


                        <div className="card" key={id} style={{ width: "18rem", flex: "none", margin: "10px" }}>
                            {id == 0 ?
                                <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt={item.name} /> :
                                <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"} className="card-img-top" alt={item.name} />

                            }

                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Climate: {item.climate}</p>
                                <p className="card-text">Diameter: {item.diameter}</p>

                                <a href="#" className="btn btn-primary float-start">learn more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
