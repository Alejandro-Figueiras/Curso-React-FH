import React from 'react'
import PropTypes from 'prop-types'
const CounterApp = ({value}) => {

    const handleAdd = e => {
        console.log("+1")
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <button id='botonclick' onClick={handleAdd}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp