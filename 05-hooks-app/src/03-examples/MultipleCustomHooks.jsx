import { useFetch } from "../hooks/useFetch"

const MultipleCustomHooks = () => {
  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/1`)

  return (
    <div>
      <h2>Información del Pokemon</h2>
      <hr />
      {isLoading && <p>Cargando...</p>}
      <p>{data?.name}</p>
    </div>
  )
}

export default MultipleCustomHooks