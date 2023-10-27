import { useCounter, useFetch } from '../hooks'

export const MultiplesCustomHooks = () => {
    const {counter, increment, decrement} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    const {sprites, forms} = !!data && data;

  return (
    <>
        <h1>Pokimones and Shiny</h1>
        <hr/>
        {
            isLoading
            ?(
                <div className="alert alert-info text-center"> 
                Loading.... 
                </div>
            )
            :(
                <div className="center-block">
                    <h3> {forms[0].name} </h3>
                    <img src={sprites.other['official-artwork'].front_default} alt="Pokimon" />
                    <img src={sprites.other['official-artwork'].front_shiny} alt="Pokimon Shiny" />
                </div>
            )
        }

        <button className="btn btn-primary" onClick={()=>increment()} >
            Next Pokimon
        </button>
        <button className="btn btn-primary" onClick={()=>decrement()} >
            Last Pokimon
        </button>
    </>
  )
}
