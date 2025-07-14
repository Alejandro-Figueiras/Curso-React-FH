import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = () => {

	const [counter, setCounter] = useState(0)

	const handleAdd = e => setCounter(counter + 1)
	const handleSubstract = e => setCounter(counter - 1)
	const handleReset = e => setCounter(0)

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>
			<button class='botonclick' onClick={handleAdd}>+1</button>
			<button class='botonclick' onClick={handleSubstract}>-1</button>
			<button class='botonclick' onClick={handleReset}>Reset</button>
		</>
	)
}

CounterApp.propTypes = {
	value: PropTypes.number
}

export default CounterApp