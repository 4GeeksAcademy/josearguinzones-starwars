import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			personaje: {},
			planeta: {},
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			obtenerPersonajes: async () => {
				try {
					console.log("obtenerPersonajes")
					const response = await fetch("https://swapi.py4e.com/api/people/")
					const data = await response.json()
					console.log(data)
					setStore({ personajes: data.results })
				} catch (error) {
					console.log(error)
				}
			},

			personajeIndividual: async (id) => {
				try {
					const response = await fetch("https://swapi.py4e.com/api/people/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ personaje: data })
				} catch (error) {
					console.log(error)
				}
			},

			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://swapi.py4e.com/api/planets/")
					const data = await response.json()
					console.log(data)
					setStore({ planetas: data.results })
				} catch (error) {
					console.log(error)
				}
			},

			planetaIndividual: async (id) => {
				try {
					const response = await fetch("https://swapi.py4e.com/api/planets/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ planeta: data })
				} catch (error) {
					console.log(error)
				}
			},
			agregarFavoritos: (item) => {
				const store = getStore()
				if (store.favoritos.includes(item)) {
					let aux = []
					aux = store.favoritos.filter((elemento) => elemento != item)
					setStore({ favoritos: aux })
				}
				else {
					setStore({ favoritos: [...store.favoritos, item] })
				}
			}


		}
	};
};

export default getState;
