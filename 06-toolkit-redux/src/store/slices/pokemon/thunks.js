import { pokemonApi } from "../../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async(dispatch, getState)=>{
        dispatch(startLoadingPokemons());
        //todo: realizar peticion https

        // CON FETCH
        // const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${page * 12}`);
        // const data = await respuesta.json();
        // console.log(data);

        //Con Axios
        const { data } = await pokemonApi.get(`/pokemon?limit=12&offset=${page * 12}`);

        dispatch(setPokemons({
            pokemons: data.results,
            page: page + 1,
        }));
    }
}