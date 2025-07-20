
const ShowIncrement = ({increment}) => {
  console.log('Ejecutandose')

  return (
    <button onClick={() => increment()}>Incrementar</button>
  )
}

export default ShowIncrement