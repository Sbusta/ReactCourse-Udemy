import { useState } from "react"

export const useCounter = (initalValue = 10) =>{
    const [counter, setCounter] = useState(initalValue)


    const increment = () =>{
        setCounter(counter+1);
    }
    const decrement = () =>{
        if (counter <=1) return;
        setCounter(counter-1);
    }    
    const reset = () =>{
        setCounter(initalValue);
    }
    return{

        counter,
        increment,
        decrement,
        reset,
    }
}