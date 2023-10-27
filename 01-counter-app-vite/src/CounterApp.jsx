import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter,setCaunter] = useState(value)

    const handkeAdd =() => {
        setCaunter(counter + 1);
    }

    const handkeSubtract =() => {
        setCaunter(counter - 1);
    }
    
    const handkeReset =() => {
        setCaunter(value);
    }

    return(
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ handkeAdd }> +1 </button>
        <button onClick={ handkeSubtract }> -1 </button>
        <button onClick={ handkeReset }> Reset </button>

    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}