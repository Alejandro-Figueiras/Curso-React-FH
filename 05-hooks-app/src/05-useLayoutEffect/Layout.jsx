import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"
import LoadingMessage from "../03-examples/LoadingMessage"
import PokemonCard from "../03-examples/PokemonCard"
import { useLayoutEffect, useRef } from "react"

const Layout = () => {
	const { counter, decrement, increment } = useCounter(1)
	const { data, isLoading } = useFetch(
		`https://pokeapi.co/api/v2/pokemon/${counter}`
	)
	const pRef = useRef()

	useLayoutEffect(() => {
		console.log(
			pRef.current.getBoundingClientRect()
		)
	}, [data])

	return (
		<div>
			<h2 ref={pRef}>Información del Pokemon</h2>
			<hr />
			{isLoading ? (
				<LoadingMessage />
			) : (
				<PokemonCard
					id={data.id}
					name={data.name}
					sprites={[
						data.sprites.front_default,
						data.sprites.front_shiny,
						data.sprites.back_default,
						data.sprites.back_shiny,
					]}
				/>
			)}

			<button
				onClick={() => {
					if (counter > 1) decrement()
				}}
			>
				Anterior
			</button>
			<button
				onClick={() => {
					if (counter < 151) increment()
				}}
			>
				Siguiente
			</button>
		</div>
	)
}

export default Layout
