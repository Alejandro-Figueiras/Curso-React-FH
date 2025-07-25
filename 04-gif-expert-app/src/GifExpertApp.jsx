import { useState } from "react"
import { GifGrid } from "./components"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {
	const [categories, setCategories] = useState([])

	const handleNewValue = (newCategory) => {
		setCategories((c) => [newCategory, ...c.filter((c) => c != newCategory)])
	}

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewValue={handleNewValue} />

			<div data-testid="grid-container">
				{categories.map((c) => (
					<GifGrid category={c} key={c} />
				))}
			</div>
		</>
	)
}

export default GifExpertApp
