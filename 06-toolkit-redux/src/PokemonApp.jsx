import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons, setPokemons, startLoadingPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {

    const dispatch = useDispatch();
    const {isLoading, page, pokemons} = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch( getPokemons());
    }, [])
    
  return (
  <>
    <h1>PokeApp</h1>
    <hr />
    <span>Loading: { isLoading ? 'True': 'False' }</span>
    <ul>
        {
        pokemons.map(({name})=>(
            <li key={name}>{name.toUpperCase()}</li>
        ))
        }

    </ul>
    <button
        disabled={isLoading}
        onClick={()=> dispatch(getPokemons(page))}
    >
        Next
    </button>
  </>
  )
}
