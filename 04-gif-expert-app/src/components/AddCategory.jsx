import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {
	const [inputValue, setInputValue] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()

		if (inputValue.trim().length <= 1) return

		// setCategories((c) => [inputValue, ...c])
		onNewValue(inputValue.trim())
		setInputValue("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={(v) => setInputValue(v.target.value)}
			/>
			{/* <button type="submit">Agregar</button> */}
		</form>
	)
}
