import React from "react";
import PropTypes from 'prop-types'
// Functional Component
const PrimeraApp = ({ saludo, subtitulo, ...props }) => {

  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  )
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  saludo: "Hola",
  subtitulo: "Subtitulo"
}

export default PrimeraApp;