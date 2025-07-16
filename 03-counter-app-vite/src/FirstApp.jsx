
const FirstApp = ({ title = 'Hola' }) => {

  return (
    <> {/* <-- Fragment */}
      <h1 data-testid="test-title">{title}</h1>
      <p>Soy un subtitulo</p>
    </>
  )
}

export default FirstApp